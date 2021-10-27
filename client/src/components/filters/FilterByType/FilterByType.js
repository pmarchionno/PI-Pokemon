import { useState } from 'react';
import iconTypes from '../../helpers/iconTypes';
import './filterByType.css';
import * as BiIcons from 'react-icons/bi';

const FilterByType = (props) => {
  const { setFilterType, listTypes } = props;

  const [currentType, setCurrentType] = useState('All Types');
  const [toogle, setToogle] = useState(false)

  function onChangeValue(e, name = 'All Types') {
    e.preventDefault();
    let nameType = name["el"];
    let filter = name["el"];
    if (nameType === undefined) {
      nameType = 'All Types';
      filter = null;
    }
    nameType = nameType.charAt(0).toUpperCase() + nameType.slice(1)
    setFilterType(filter?.toLowerCase());
    setCurrentType(nameType);
    setToogle(!toogle);
  }

  function onClickSelect(e) {
    e.preventDefault();
    setToogle(!toogle);
  }

  return (
    <div>
      <div class="info">
        <p>Type</p>
      </div>
      <div className="contenedor">
        <form action="">
          <div className="selectbox" onClick={onClickSelect} >
            <div className={`select ${toogle ? 'active' : ''}`} id="select">
              <div className="contenido-select">
                {
                  iconTypes[currentType.toLowerCase()]
                    ? <img src={iconTypes[currentType.toLowerCase()]} alt={`icon_${currentType}`} />
                    : <h1></h1>
                }
                <h1 className="titulo">{currentType}</h1>
              </div>
              <i className="BiChevronDown">{BiIcons.BiChevronDown()}</i>
            </div>

            <div className={`opciones ${toogle ? 'active' : ''}`} id="opciones">
              <a href="#" className="opcion" name='All Types' onClick={(element) => onChangeValue(element, 'All Types')}>
                <div className="contenido-opcion">
                  <div className="textos">
                    <h1 className="titulo">All Types</h1>
                  </div>
                </div>
              </a>
              {
                listTypes?.map((el, index) => (
                  <a key={`filterByType-option-${el}`} href="#" className="opcion" name={el} onClick={(element) => onChangeValue(element, { el })}>
                    <div className="contenido-opcion">
                      <img src={iconTypes[el]} alt={`icon_${el}`} />
                      <div className="textos">
                        <h1 className="titulo">{el}</h1>
                        {/* <p className="descripcion">Some description</p> */}
                      </div>
                    </div>
                  </a>
                ))
              }
            </div>
          </div>

          <input type="hidden" name="pais" id="inputSelect" value={currentType} />
        </form>
      </div>
    </div>
  );
}

export default FilterByType;