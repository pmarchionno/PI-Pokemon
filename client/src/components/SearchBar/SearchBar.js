import { useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { getPokemonByName, setLoading } from '../../actions';
import * as FaIcons from 'react-icons/fa';
import './searchBar.css';

const SearchBar = (props) => {
  const { setShowSearch, setCurrentPage } = props;

  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  // useEffect(() => {
  //   dispatch(setLoading(true));
  // }, [dispatch])
 
  function changeInput(e) {
    setInputValue(e.target.value)

  }

  function onKeyUp(e) {
    e.preventDefault();
    let keycode = e.keyCode;
    if (keycode == '13') {
      setCurrentPage(1);
      if (e.target.value === '') setShowSearch(false);
      else {
        dispatch(getPokemonByName(inputValue))
        setShowSearch(true);
        // setInputValue('');
      }
    }
  }

  return (
    <div>
      <div class="box">
        <div class="container-1">
          <span class="icon">
            <FaIcons.FaSistrix className='icon-faicons' />
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