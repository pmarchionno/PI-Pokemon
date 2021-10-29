import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addPokemon, getPokemonTyes } from "../../actions";
import './form.css';

export function Form(props) {
  const dispatch = useDispatch();
  const listTypes = useSelector((state) => state.pokemonTypes);

  // useEffect(() => {
  //   dispatch(getPokemonTyes())
  // }, [dispatch])

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

  function validate(el) {
    if (input[el] === "") {
      let inputName = el.charAt(0).toUpperCase() + el.slice(1)
      setError({ ...error, [el]: `The ${inputName} field is required` });
    } else {
      setError({ ...error, [el]: "" });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(addPokemon(input));
    await window.alert("The Pokémon has been created!")
    .then(window.location.href = "/");
  }

  const onChange = (e) => {
    // const target = e.target;
    // const regexName = /^[A-Za-z]+$/;
    // if (e.target.name === 'temperament') {
    //   setInput({
    //     ...input,
    //     [e.target.name]: [...input.temperament, e.target.value]
    //   }); 
    // } else {
    //   setInput({
    //     ...input,
    //     [e.target.name]: e.target.value
    //   })
    // }

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

  return (
    <div className='style-form'>

      <div className="style-form">
        <form onSubmit="if(!confirm('Is the form filled out correctly?')){return false;}else{{handleSubmit}}">
          <div>
            <label htmlFor='name' className={!error.name ? 'label-input-form' : 'label-input-form-not-valid'}>Name</label>
            <div className='group-input-form'>
              <input
                name='name'
                type="text"
                placeholder='Name'
                value={input.name}
                onChange={onChange}
                onBlur={(e) => validate(e.target.name)}
                className={error.name ? "input-form-style-not-valid" : "input-form-style"}
                required>
              </input>
              <div className={!error.name ? 'leyenda-msg-field-valid-not-valid' : 'leyenda-msg-field-not-valid'}>
                {error.name}
              </div>
            </div>
          </div>

          <div>
            <label htmlFor='life' className={!error.life ? 'label-input-form' : 'label-input-form-not-valid'}>Life</label>
            <div className='group-input-form'>
              <input
                name='life'
                type="text"
                placeholder='Life'
                value={input.life}
                onChange={onChange}
                onBlur={(e) => validate(e.target.name)}
                className={error.life ? "input-form-style-not-valid" : "input-form-style"}
                required>
              </input>
              <div className={!error.life ? 'leyenda-msg-field-valid-not-valid' : 'leyenda-msg-field-not-valid'}>
                {error.life}
              </div>
            </div>
          </div>

          <div>
            <label htmlFor='attack' className={!error.attack ? 'label-input-form' : 'label-input-form-not-valid'}>Attack</label>
            <div className='group-input-form'>
              <input
                name='attack'
                type="text"
                placeholder='Attack'
                value={input.attack}
                onChange={onChange}
                onBlur={(e) => validate(e.target.name)}
                className={error.attack ? "input-form-style-not-valid" : "input-form-style"}
                required>
              </input>
              <div className={!error.attack ? 'leyenda-msg-field-valid-not-valid' : 'leyenda-msg-field-not-valid'}>
                {error.attack}
              </div>
            </div>
          </div>

          <div>
            <label htmlFor='defense' className={!error.defense ? 'label-input-form' : 'label-input-form-not-valid'}>Defense</label>
            <div className='group-input-form'>
              <input
                name='defense'
                type="text"
                placeholder='Defense'
                value={input.defense}
                onChange={onChange}
                onBlur={(e) => validate(e.target.name)}
                className={error.defense ? "input-form-style-not-valid" : "input-form-style"}
                required>
              </input>
              <div className={!error.defense ? 'leyenda-msg-field-valid-not-valid' : 'leyenda-msg-field-not-valid'}>
                {error.defense}
              </div>
            </div>
          </div>

          <div>
            <label htmlFor='speed' className={!error.speed ? 'label-input-form' : 'label-input-form-not-valid'}>Speed</label>
            <div className='group-input-form'>
              <input
                name='speed'
                type="text"
                placeholder='Speed'
                value={input.speed}
                onChange={onChange}
                onBlur={(e) => validate(e.target.name)}
                className={error.speed ? "input-form-style-not-valid" : "input-form-style"}
                required>
              </input>
              <div className={!error.speed ? 'leyenda-msg-field-valid-not-valid' : 'leyenda-msg-field-not-valid'}>
                {error.speed}
              </div>
            </div>
          </div>

          <div>
            <label htmlFor='height' className={!error.height ? 'label-input-form' : 'label-input-form-not-valid'}>Height</label>
            <div className='group-input-form'>
              <input
                name='height'
                type="text"
                placeholder='Height'
                value={input.height}
                onChange={onChange}
                onBlur={(e) => validate(e.target.name)}
                className={error.height ? "input-form-style-not-valid" : "input-form-style"}
                required>
              </input>
              <div className={!error.height ? 'leyenda-msg-field-valid-not-valid' : 'leyenda-msg-field-not-valid'}>
                {error.height}
              </div>
            </div>
          </div>

          <div>
            <label htmlFor='weight' className={!error.weight ? 'label-input-form' : 'label-input-form-not-valid'}>Weight</label>
            <div className='group-input-form'>
              <input
                name='weight'
                type="text"
                placeholder='Weight'
                value={input.weight}
                onChange={onChange}
                onBlur={(e) => validate(e.target.name)}
                className={error.weight ? "input-form-style-not-valid" : "input-form-style"}
                required>
              </input>
              <div className={!error.weight ? 'leyenda-msg-field-valid-not-valid' : 'leyenda-msg-field-not-valid'}>
                {error.weight}
              </div>
            </div>
          </div>

          <div>
            <label htmlFor='image' className='label-input-form'>Image</label>
            <div className='group-input-form'>
              <input
                name='image'
                type="text"
                placeholder='Image'
                value={input.image}
                onChange={onChange}
                className="input-form-style">
              </input>
              {/* <div className={!error.image? 'leyenda-msg-field-valid-not-valid': 'leyenda-msg-field-not-valid'}>
            {error.image}
            </div> */}
            </div>
          </div>

          {/* <div>
          <label>Image</label>
          <input name='image'
            onChange={onChange}
          >
          </input>
        </div> */}

          <div>
            <label htmlFor='type1' className={!error.type1 ? 'label-input-form' : 'label-input-form-not-valid'}>Type1</label>
            <div className='group-input-form'>
              <select
                name='type1'
                onChange={onChange}
                placeholder='Select'
                onBlur={(e) => validate(e.target.name)}
                className="input-form-style">

                <option value=''>Select...</option>
                {
                  listTypes.map((name, index) => (
                    <option value={name} key={index}>{name}</option>
                  ))
                }
              </select>
              <div className={!error.type1 ? 'leyenda-msg-field-valid-not-valid' : 'leyenda-msg-field-not-valid'}>
                {error.type1}
              </div>
            </div>
          </div>

          <div>
            <label htmlFor='type2' className={!error.type2 ? 'label-input-form' : 'label-input-form-not-valid'}>Type2</label>
            <div className='group-input-form'>
              <select
                name='type2'
                onChange={onChange}
                placeholder='Select'
                onBlur={(e) => validate(e.target.name)}
                className="input-form-style">

                <option value=''>Select...</option>
                {
                  listTypes.map((name, index) => (
                    <option value={name} key={index}>{name}</option>
                  ))
                }
              </select>
              <div className={!error.type2 ? 'leyenda-msg-field-valid-not-valid' : 'leyenda-msg-field-not-valid'}>
                {error.type2}
              </div>
            </div>
          </div>

          <div className='content-button-submit'>
            <button
              type='submit'
              className='button-submit'
              onClick={handleSubmit}
              disabled={
                input.name === "" ||
                  input.life === "" ||
                  input.attack === "" ||
                  input.defense === "" ||
                  input.speed === "" ||
                  input.height === "" ||
                  input.weight === "" ||
                  input.type1 === "" ||
                  input.type2 === ""
                  ? true
                  : false
              }
            >Create Pokémon</button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Form;