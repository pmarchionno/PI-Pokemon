import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonTyes } from "../../actions";

import {Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from './Formularios';
import Input from './Input';

// import './form.css';
import * as FcIcons from 'react-icons/fc';
import { validText, validNumber } from './validations';

// import imgDefault from '../../images/dog.png'

const Form = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonTyes())
  }, [dispatch])

  const typeList = useSelector((state) => state.pokemonTypes);

  const [input, setInput] = useState(
    {
      name: '',
      life: '',
      attack: '',
      defense: '',
      speed: '',
      height: '',
      weight: '',
      image: 'https://p4.wallpaperbetter.com/wallpaper/710/195/806/pokemon-pikachu-soft-shading-fan-art-1400x1046-anime-pokemon-hd-art-wallpaper-preview.jpg',
      type1: '',
      type2: '',
      types: []
    }
  )

  const [error, setError] = useState({
    name: '',
    life: '',
    attack: '',
    defense: '',
    speed: '',
    height: '',
    weight: '',
    image: 'https://p4.wallpaperbetter.com/wallpaper/710/195/806/pokemon-pikachu-soft-shading-fan-art-1400x1046-anime-pokemon-hd-art-wallpaper-preview.jpg',
    type1: '',
    type2: '',
    types: []
  });

  function validate(e) {
    const { name, value } = e.target;

    let inputName = name.charAt(0).toUpperCase() + name.slice(1);

    if (input[name] === "") {
      setError({ ...error, [name]: `the ${inputName} field is required` });
    }
  }

  async function submit(e) {
    e.preventDefault();
    axios.post('http://localhost:3001/pokemon', input);
    window.alert("Hello world!");
  }

  const handleInputChange = (e) => {
    const nameEvent = e.target.name;

    let type = [];
    if (e.target.name == 'type1') {
      if (e.target.value.length > 0) type = type.concat(e.target.value)
    } else {
      if (input.type1.length > 0) { type = type.concat(input.type1); }
    }

    if (e.target.name == 'type2') {
      if (e.target.value.length > 0) type = type.concat(e.target.value)
    } else {
      if (input.type2.length > 0) { type = type.concat(input.type2); }
    }

    if (nameEvent === 'image' || nameEvent === 'type1' || nameEvent === 'type2') {
      setInput({
        ...input,
        [nameEvent]: e.target.value,
        types: type
      })
    } else if (nameEvent == 'name') {
      if (e.target.value == '' || /^[A-Za-z\s\,]/.test(e.target.value))
        setInput({
          ...input,
          [nameEvent]: e.target.value,
          types: type
        })
    } else {
      if (e.target.value == '' || /^[0-9\b]+$/.test(e.target.value))
        setInput({
          ...input,
          [nameEvent]: e.target.value,
          types: type
        })
    }
  };

  const [usuario, cambiarUsuario] = useState({campo: '', valido: null});
	const [nombre, cambiarNombre] = useState({campo: '', valido: null});
	const [password, cambiarPassword] = useState({campo: '', valido: null});
	const [password2, cambiarPassword2] = useState({campo: '', valido: null});
	const [correo, cambiarCorreo] = useState({campo: '', valido: null});
	const [telefono, cambiarTelefono] = useState({campo: '', valido: null});
	const [terminos, cambiarTerminos] = useState(false);
	const [formularioValido, cambiarFormularioValido] = useState(null);

  const expresiones = {
		usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
		nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		password: /^.{4,12}$/, // 4 a 12 digitos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		telefono: /^\d{7,14}$/ // 7 a 14 numeros.
	}

  const onChangeTerminos = (e) => {
		cambiarTerminos(e.target.checked);
	}

  const validarPassword2 = () => {
		if(password.campo.length > 0){
			if(password.campo !== password2.campo){
				cambiarPassword2((prevState) => {
					return {...prevState, valido: 'false'}
				});
			} else {
				cambiarPassword2((prevState) => {
					return {...prevState, valido: 'true'}
				});
			}
		}
	}

  const onSubmit = (e) => {
		e.preventDefault();

		if(
			usuario.valido === 'true' &&
			nombre.valido === 'true' &&
			password.valido === 'true' &&
			password2.valido === 'true' &&
			correo.valido === 'true' &&
			telefono.valido === 'true' &&
			terminos
		){
			cambiarFormularioValido(true);
			cambiarUsuario({campo: '', valido: ''});
			cambiarNombre({campo: '', valido: null});
			cambiarPassword({campo: '', valido: null});
			cambiarPassword2({campo: '', valido: 'null'});
			cambiarCorreo({campo: '', valido: null});
			cambiarTelefono({campo: '', valido: null});

			// ... 
		} else {
			cambiarFormularioValido(false);
		}
	}

  return (
    <Formulario action="" onSubmit={onSubmit}>
				<Input
					estado={usuario}
					cambiarEstado={cambiarUsuario}
					tipo="text"
					label="Usuario"
					placeholder="john123"
					name="usuario"
					leyendaError="El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo."
					expresionRegular={expresiones.usuario}
				/>
				<Input
					estado={nombre}
					cambiarEstado={cambiarNombre}
					tipo="text"
					label="Nombre"
					placeholder="John Doe"
					name="usuario"
					leyendaError="El nombre solo puede contener letras y espacios."
					expresionRegular={expresiones.nombre}
				/>
				<Input
					estado={password}
					cambiarEstado={cambiarPassword}
					tipo="password"
					label="Contraseña"
					name="password1"
					leyendaError="La contraseña tiene que ser de 4 a 12 dígitos."
					expresionRegular={expresiones.password}
				/>
				<Input
					estado={password2}
					cambiarEstado={cambiarPassword2}
					tipo="password"
					label="Repetir Contraseña"
					name="password2"
					leyendaError="Ambas contraseñas deben ser iguales."
					funcion={validarPassword2}
				/>
				<Input
					estado={correo}
					cambiarEstado={cambiarCorreo}
					tipo="email"
					label="Correo Electrónico"
					placeholder="john@correo.com"
					name="correo"
					leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
					expresionRegular={expresiones.correo}
				/>
				<Input
					estado={telefono}
					cambiarEstado={cambiarTelefono}
					tipo="text"
					label="Teléfono"
					placeholder="4491234567"
					name="telefono"
					leyendaError="El telefono solo puede contener numeros y el maximo son 14 dígitos."
					expresionRegular={expresiones.telefono}
				/>



				<ContenedorTerminos>
					<Label>
						<input 
							type="checkbox"
							name="terminos"
							id="terminos"
							checked={terminos} 
							onChange={onChangeTerminos}
						/>
						Acepto los Terminos y Condiciones
					</Label>
				</ContenedorTerminos>
				{/* {formularioValido === false && <MensajeError>
					<p>
						<FontAwesomeIcon icon={FcHighPriority}/>
						<b>Error:</b> Por favor rellena el formulario correctamente.
					</p>
				</MensajeError>} */}
				<ContenedorBotonCentrado>
					<Boton type="submit">Enviar</Boton>
					{formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
				</ContenedorBotonCentrado>
			</Formulario>

    // <div className='style-component'>
    //   <label id='222'>Label</label>
    //   <form className="form" onSubmit={submit}>

    //     <div className='component-input'>
    //       <label for='name'>Name</label>
    //       <div className='component-input-group'>
    //         <input
    //           id={"form__" + `${input.name}`}
    //           type="text"
    //           name='name'
    //           value={input.name}
    //           placeholder='Name'
    //           className={!error.name ? '' : 'border-error'}
    //           onChange={(e) => handleInputChange(e)}
    //           onBlur={(e) => validate(e)}
    //           required
    //         />
    //         <div className='component-icon'> {FcIcons.FcCheckmark()}</div>
    //         //icon={estado.valido === 'true' ? faCheckCircle : faTimesCircle}
		// 			//valido={estado.valido}
    //       </div>
    //       {!error.name ? null : <span className='component-input-error'>{error.name}</span>}
    //     </div>

    //     <div className='component-input'>
    //       <label for='life'>Life</label>
    //       <div className='component-input-group'>
    //         <input
    //           id={"form__" + `${input.life}`}
    //           type="text"
    //           name='life'
    //           value={input.life}
    //           placeholder='Life'
    //           className={!error.life ? '' : 'border-error'}
    //           onChange={(e) => handleInputChange(e)}
    //           onBlur={(e) => validate(e)}
    //           required
    //         />
    //         <div> {FcIcons.FcCheckmark()}</div>
    //       </div>
    //       {!error.life ? null : <span className='component-input-error'>{error.life}</span>}
    //     </div>


    //     <button
    //       className={
    //         ( input.name === "" ||
    //           input.life === "" ||
    //           input.attack === "" ||
    //           input.defense === "" ||
    //           input.speed === "" ||
    //           input.height === "" ||
    //           input.weight === "" ||
    //           ( input.type1 === "" &&
    //           input.type2 === "" ) )
    //           ? 'button-disable'
    //           : 'button'
    //       }
    //     >Create</button>
    //   </form>
    // </div>
  )
}

export default Form;