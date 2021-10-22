import { useState } from 'react';
import iconTypes from '../../helpers/iconTypes';
import './filterByType.css';
import * as BiIcons from 'react-icons/bi';
import itemType from './itemType';

const FilterByType = (props) => {
  const { setFilterType, listTypes } = props;

  const [currentType, setCurrentType] = useState('');
  const [toogle, setToogle] = useState(false)

  function onChangeValue(e) {
    e.preventDefault();
    console.log('Yo soy e.target', e.target);
    setFilterType(e.target.value);
    setCurrentType(e.target);
    setToogle(!toogle);
  }

  
  function onClickSelect(e) {
    e.preventDefault();
    // console.log('Yo soy e.target', e.target);
    setToogle(!toogle);
  }

  return (
    <div>
      Type
      {/* <div>
        <select onChange={onChangeValue} name='combo-filter' placeholder='Select Type'>
          <option value='Select Type'>All Type</option>
          {
            listTypes?.map((el, index) => (
              <option value={el} key={index}>{el}</option>
            ))
          }
        </select>
      </div> */}

      <div className="contenedor">
        <form action="">
          <div className="selectbox" onClick={onClickSelect} >
            <div className={`select ${toogle? 'active': ''}`} id="select">
              <div className="contenido-select">
                <h1 className="titulo">Select Your Type </h1>
                {/* <p className="descripcion">Lorem ipsum dolor sit.</p> */}
              </div>
              <i className="BiChevronDown">{BiIcons.BiChevronDown()}</i>
            </div>

            <div className={`opciones ${toogle? 'active': ''}`} id="opciones">
              {
                listTypes?.map((el, index) => (
                  <itemType
                    name={el}/>
                  // <a href="#" className="opcion" name={el} onClick={onChangeValue} >
                  //   <div className="contenido-opcion">
                  //     <img src={iconTypes[el]} alt={`icon_${el}`} />
                  //     <div className="textos">
                  //       <h1 className="titulo">{el}</h1>
                  //       {/* <p className="descripcion">Consectetur adipiscing elit.</p> */}
                  //     </div>
                  //   </div>
                    
                  // </a>
                ))
              }
            </div>
          </div>

          <input type="hidden" name="pais" id="inputSelect" value={currentType}/>
        </form>

      </div>

    </div>
  );
}

export default FilterByType;