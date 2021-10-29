import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonTyes } from "../../actions";
import './form.css';
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
      image: 'https://cdn2.thedogapi.com/images/S1V3Qeq4X.jpg',
      type1: '',
      type2: '',
      types: []
    }
  )

  const [error, setError] = useState({});

  function validate(e) {
    const { name, value } = e.target;

    let inputName = name.charAt(0).toUpperCase() + name.slice(1);

    if (input[name] === "") {
      setError({ ...error, [name]: `El campo ${inputName} no puede estar vacio` });
    } else {
      setError({ ...error, [name]: "" });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:3001/dogs', input);
    window.alert("Hello world!");
  }

  const handleInputChange = (e) => {
    const target = e.target;
    const regexName = /^[A-Za-z]+$/;
    if (e.target.name === 'temperament') {
      setInput({
        ...input,
        [e.target.name]: [...input.temperament, e.target.value]
      });
    } else {
      setInput({
        ...input,
        [e.target.name]: e.target.value
      })
    }
  };

  return (
    <div>

      <div className="register">
        <form onSubmit="if(!confirm('Is the form filled out correctly?')){return false;}else{{handleSubmit}}" className="form_">
          <div>
            <div className='aaaa'>
              <label htmlFor="name">
                <input
                  type="text"
                  id="name"
                  name='name'
                  placeholder="Name"
                  value={input.name}
                  onChange={handleInputChange}
                  onBlur={(e) => validate(e)}
                  required
                />
                <span>Name</span>
              </label>
              {!error.name ? null : <span className='msg-error'>{error.name}</span>}
            </div>

            <div>
              <label htmlFor="life">
                <input
                  type="number"
                  id="life"
                  name='life'
                  min="1"
                  placeholder="Life"
                  value={input.life}
                  onChange={handleInputChange}
                  onBlur={(e) => validate(e)}
                  required
                />
                <span>Life</span>
              </label>
              {!error.life ? null : <span className='msg-error'>{error.life}</span>}
            </div>

            <div>
              <label htmlFor="attack">
                <input
                  type="number"
                  id="attack"
                  name='attack'
                  min="1"
                  placeholder="Attack"
                  value={input.attack}
                  onChange={handleInputChange}
                  onBlur={(e) => validate(e)}
                  required
                />
                <span>Attack</span>
              </label>
              {!error.attack ? null : <span className='msg-error'>{error.attack}</span>}
            </div>

            <div>
              <label htmlFor="defense">
                <input
                  type="number"
                  id="defense"
                  name='defense'
                  min="1"
                  placeholder="Defense"
                  value={input.defense}
                  onChange={handleInputChange}
                  onBlur={(e) => validate(e)}
                  required
                />
                <span>Defense</span>
              </label>
              {!error.defense ? null : <span className='msg-error'>{error.defense}</span>}
            </div>

            <div>
              <label htmlFor="speed">
                <input
                  type="number"
                  id="speed"
                  name='speed'
                  min="1"
                  placeholder='Speed'
                  value={input.speed}
                  onChange={handleInputChange}
                  onBlur={(e) => validate(e)}
                  required
                />
                <span>Speed</span>
              </label>
              {!error.speed ? null : <span className='msg-error'>{error.speed}</span>}
            </div>

            <div>
              <label htmlFor="height">
                <input
                  type="number"
                  id="height"
                  name='height'
                  min="1"
                  placeholder="Height"
                  value={input.height}
                  onChange={handleInputChange}
                  onBlur={(e) => validate(e)}
                  required
                />
                <span>Height</span>
              </label>
              {!error.height ? null : <span className='msg-error'>{error.height}</span>}
            </div>

            <div>
              <label htmlFor="weight">
                <input
                  type="number"
                  id="weight"
                  name='weight'
                  min="1"
                  placeholder='Weight'
                  value={input.weight}
                  onChange={handleInputChange}
                  onBlur={(e) => validate(e)}
                  required
                />
                <span>Weight</span>
              </label>
              {!error.weight ? null : <span className='msg-error'>{error.weight}</span>}
            </div>

            <div>
              <label htmlFor="image">
                <input
                  type="text"
                  id="image"
                  name='image'
                  placeholder='Image'
                  value={input.image}
                  onChange={handleInputChange}
                  onBlur={(e) => validate(e)}
                  required
                />
                <span>Image</span>
              </label>
              {!error.image ? null : <span className='msg-error'>{error.image}</span>}
            </div>

            {/* <div>
          <label>Type 1</label>
          <input name='type1'
            type="number"
            min="1"
            placeholder='Type'
            value={input.type1}
            onChange={handleInputChange}
            onBlur={(e) => validate(e)}
            required>
          </input>
          {!error.type1 ? null : <span className='msg-error'>{error.type1}</span>}
        </div>

        <div>
          <label>Type 2</label>
          <input name='type2'
            type="number"
            min="1"
            placeholder='Type'
            value={input.type2}
            onChange={handleInputChange}
            onBlur={(e) => validate(e)}
            required>
          </input>
          {!error.type2 ? null : <span className='msg-error'>{error.type2}</span>}
        </div> */}

            <div>
              <div className='filter-combo'>
                <select onChange={handleInputChange} name='type1' placeholder='Select'>
                  <option value=''>Select...</option>
                  {
                    typeList.map((type, index) => (
                      <option value={type} key={`type1_${index}`}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
                    ))
                  }
                </select>
              </div>
            </div>

            <div>
              <div className='filter-combo'>
                <select onChange={handleInputChange} name='type2' placeholder='Select'>
                  <option value=''>Select...</option>
                  {
                    typeList.map((type, index) => (
                      <option value={type} key={`type2_${index}`}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
                    ))
                  }
                </select>
              </div>
            </div>

            <button
              type='submit'
              className={
                input.name === "" ||
                  input.height === "" ||
                  input.weight === "" ||
                  input.lifeSpan === ""
                  // input.temperament.length <= 0
                  ? 'button-submit-disable'
                  : 'button-submit'
              }
              onClick={handleSubmit}
              disabled={
                input.name === "" ||
                  input.height === "" ||
                  input.weight === "" ||
                  input.lifeSpan === ""
                  // input.temperament.length <= 0
                  ? true
                  : false
              }
            >Create Pokémon</button>
            {/* <button onClick={props.onClose()}>Cancel</button> */}

          </div>

          <div>
            <figure className="form-img">
              <img src={input['image']} alt="" />
            </figure>

          </div>
        </form>

      </div>

      {/* Otra forma */}
      <Fragment>
        <Link to='/principal'>
            <button className="posButt">Regresar</button>            
        </Link>
        <form className="form">
        <div className="contenedores" className="style">
            <label className="headers">Nombre:</label> <br />
            <input type="text" placeholder="nombre" value={input.name} className="styleM" required/>
        </div>
        <div className="contenedores">
            <label className="headers">Altura:</label> <br />
            <input type="number" min="0" placeholder="min" value={input.name}  className="itemsp" required/>
            <input type="number" min="0" placeholder="max" value={input.name}  className="itemsp" required/>
        </div>
        <div className="contenedores">
            <label className="headers">Peso:</label> <br />
            <input type="number" min="0" placeholder="min" value={input.name} className="itemsp" required/>
            <input type="number" min="0" placeholder="max" value={input.name} className="itemsp" required/>
        </div>
        <div className="contenedores">
            <label className="headers">Años de vida:</label> <br />
            <input type="number" min="0" value={input.name} placeholder="min"  className="itemsp" required/>
            <input type="number" min="0" value={input.name} placeholder="max"  className="itemsp" required/>
        </div>
        <div className="contenedores" className="style">
            <label className="headers">Imagen url:</label> <br />
            <input type="text" value={input.image} placeholder="url" className="styleM"/>
        </div>
        {/* <div className="contenedores">
            <label className="headers">Temperamentos:</label> <br />
            {!temperamentsE?null:
                <select onChange={cambiaSelect} className="selecStyle" required>
                    <option key={-1} value={""} className="selecStyle"></option>
                    {
                        temperamentsE.map((item, i) => (
                            <option key={i} value={item}>{item}</option>
                        ))
                    }
                </select>
            }
        </div> */}
        <div className="contenedores">
            <input type="submit" value="Crear" className="butt"/>
        </div>
        </form>
    </Fragment>
    </div>
  )
}

export default Form;