import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addPokemon, getPokemonTyes } from "../../actions";

import { Formulario, Label, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError } from './Formularios';
import Input from './Input';
import Select from './Select';
import { FcExpired } from 'react-icons/fc';
import { FaExclamationTriangle } from 'react-icons/fa';

// import './form.css';
import { validText, validNumber } from './validations';

// import imgDefault from '../../images/dog.png'

const Form = (props) => {
  const dispatch = useDispatch();
  const listTypes = useSelector((state) => state.pokemonTypes);

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
    dispatch(addPokemon(input))
    // axios.post('http://localhost:3001/pokemon', input);
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

  const [name, cambiarName] = useState({ campo: '', valido: null });
  const [life, cambiarLife] = useState({ campo: '', valido: null });
  const [attack, cambiarAttack] = useState({ campo: '', valido: null });
  const [defense, cambiarDefense] = useState({ campo: '', valido: null });
  const [speed, cambiarSpeed] = useState({ campo: '', valido: null });
  const [height, cambiarHeight] = useState({ campo: '', valido: null });
  const [weight, cambiarWeight] = useState({ campo: '', valido: null });
  const [image, cambiarImage] = useState({ campo: 'https://images4.alphacoders.com/641/641968.jpg', valido: null });
  const [type1, cambiarType1] = useState({ campo: '', valido: null });
  const [type2, cambiarType2] = useState({ campo: '', valido: null });
  const [formularioValido, cambiarFormularioValido] = useState(null);

  const expresiones = {
    name: /^[a-zA-Z0-9_-]{1,16}$/, // Letras, numeros, guion y guion_bajo
    onlyNumbers: /^[0-9\b]+$/, //Nùmeros
    life: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    defense: /^.{4,12}$/, // 4 a 12 digitos.
    height: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    attack: /^\d{7,14}$/ // 7 a 14 numeros.
  }

  const valitionTypes = () => {
    let type = [].concat(type1.campo);
    if (type2.campo.length > 0) {
      type = type.concat(type2.campo)
    } else {
      if (input.type1.length > 0) { type = type.concat(input.type1); }
    }

    return type.length < 1;
  }

  async function onSubmit(e) {
    e.preventDefault();

    let input = {
      name: name.campo,
      life: life.campo,
      attack: attack.campo,
      defense: defense.campo,
      speed: speed.campo,
      height: height.campo,
      weight: weight.campo,
      image: image.campo,
      types: [].concat(type1.campo).concat(type2.campo)
    }

    if (
      name.valido === 'true' &&
      life.valido === 'true' &&
      attack.valido === 'true' &&
      defense.valido === 'true' &&
      speed.valido === 'true' &&
      height.valido === 'true' &&
      weight.valido === 'true' &&
      (type1.valido === 'true' ||
        type2.valido === 'true')
    ) {
      cambiarFormularioValido(true);

      dispatch(addPokemon(input)); //axios.post('http://localhost:3001/pokemon', input);

      cambiarName({ campo: '', valido: '' });
      cambiarLife({ campo: '', valido: null });
      cambiarAttack({ campo: '', valido: null });
      cambiarDefense({ campo: '', valido: null });
      cambiarSpeed({ campo: '', valido: null });
      cambiarHeight({ campo: '', valido: null });
      cambiarWeight({ campo: '', valido: null });
      cambiarImage({ campo: '', valido: null });
      cambiarType1({ campo: '', valido: null });
      cambiarType2({ campo: '', valido: null });

      // ... 
    } else {
      cambiarFormularioValido(false);
    }
  }
  
  return (
    <div background-image={`url(${image.campo})`}>

      <Formulario action="" onSubmit={onSubmit} >
        <Input
          estado={name}
          cambiarEstado={cambiarName}
          tipo="text"
          label="Name"
          placeholder="name"
          name="name"
          leyendaError="The Name field must be 1 to 16 characters long and can only contain numbers, letters, and underscores."
          expresionRegular={expresiones.name}
        />
        <Input
          estado={life}
          cambiarEstado={cambiarLife}
          tipo="number"
          label="Life"
          placeholder="Life"
          name="life"
          leyendaError="The Life field is required and must contain only numbers."
          expresionRegular={expresiones.onlyNumbers}
        />
        <Input
          estado={attack}
          cambiarEstado={cambiarAttack}
          tipo="number"
          label="Attack"
          placeholder="Attack"
          name="attack"
          leyendaError="The Attack field is required and must contain only numbers."
          expresionRegular={expresiones.onlyNumbers}
        />
        <Input
          estado={defense}
          cambiarEstado={cambiarDefense}
          tipo="number"
          label="Defense"
          placeholder="Defense"
          name="defense"
          leyendaError="The Defense field is required and must contain only numbers."
          expresionRegular={expresiones.onlyNumbers}
        />
        <Input
          estado={speed}
          cambiarEstado={cambiarSpeed}
          tipo="number"
          label="Speed"
          placeholder="Speed"
          name="speed"
          leyendaError="The Speed field is required and must contain only numbers."
          expresionRegular={expresiones.onlyNumbers}
        />
        <Input
          estado={height}
          cambiarEstado={cambiarHeight}
          tipo="number"
          label="Height"
          placeholder="Height"
          name="height"
          leyendaError="The Height field is required and must contain only numbers."
          expresionRegular={expresiones.onlyNumbers}
        />
        <Input
          estado={weight}
          cambiarEstado={cambiarWeight}
          tipo="number"
          label="Weight"
          placeholder="Weight"
          name="weight"
          leyendaError="The Weight field is required and must contain only numbers."
          expresionRegular={expresiones.onlyNumbers}
        />
        <Input
          estado={image}
          cambiarEstado={cambiarImage}
          tipo="text"
          label="Image"
          placeholder="Image"
          name="image"
          leyendaError="The Image field is required and must contain only numbers."
        />
        <Input
          estado={type1}
          cambiarEstado={cambiarType1}
          tipo="text"
          label="Type 1"
          placeholder="Type 1"
          name="type1"
          leyendaError="The Type 1 or Type 2 field is required and must contain only numbers."
          expresionRegular={expresiones.name}
          funcion={valitionTypes}
          listOptions={listTypes}
        />
        <Input
          estado={type2}
          cambiarEstado={cambiarType2}
          tipo="text"
          label="Type 2"
          placeholder="Type 2"
          name="type2"
          leyendaError="The Type 1 or Type 2 field is required and must contain only numbers."
          expresionRegular={expresiones.name}
          funcion={valitionTypes}
        />

        {formularioValido === false && <MensajeError>
          <p>
            {FaExclamationTriangle()}
            <b>Error:</b> Please fill in the form correctly. .
          </p>
        </MensajeError>}

        <ContenedorBotonCentrado>
          <Boton type="submit">Create Pokémon</Boton>
          {formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
        </ContenedorBotonCentrado>
      </Formulario>
    </div>
  )
}

export default Form;