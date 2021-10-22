import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { getPokemonByName } from '../../actions';
import * as FaIcons from 'react-icons/fa';
import { FaSearch } from "react-icons/fa";
import './searchBar.css';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  function changeInput(e) {
    setInputValue(e.target.value)
  }

  function onKeyUp(e) {
    e.preventDefault();
    let keycode = e.keyCode;
    if (keycode === '13') {
      console.log('ENTRE')
      dispatch(getPokemonByName(inputValue))
      setInputValue('');
    }
  }

  return (
    <div>
      <div class="box">
        <div class="container-1">
          <span class="icon">
            <FaIcons.FaSistrix className='icon-faicons'/>
            <input
              type="search"
              id="search"
              placeholder="Search..."
              onChange={changeInput}
              onKeyUp={onKeyUp} />
          </span>
        </div>
      </div>
    </div>
  )
}

export default SearchBar;