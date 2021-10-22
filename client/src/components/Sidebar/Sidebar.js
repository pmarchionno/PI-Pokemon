import { Link } from 'react-router-dom';
import './sidebar.css';
import * as FaIcons from 'react-icons/fa';
import * as FcIcons from 'react-icons/fc';
import * as BiIcons from 'react-icons/bi';
import SearchBar from '../SearchBar/SearchBar';
import FilterByFlag from '../filters/FilterByFlag/FilterByFlag';
import FilterByType from '../filters/FilterByType/FilterByType';
import Sort from '../Sort/Sort';

const Sidebar = (props) => {
  const { setFilterCreateBy, setFilterType, listTypes } = props;

  return (
    <div>
      {/* <Link to="/home">
        <div class="logo">
          Sidebar
        </div>
      </Link>
      <hr /> */}

      <div className='sidebar'>
        <ul>
          <li>
            <Link to="/home" className='text-dark rounded py-2 w-100 d-inline-block'><FaIcons.FaHome className='me-2' /><FcIcons.FcHome className='me-2' />Home</Link>
          </li>

          <li>
            <div className='searchBar'>
              <SearchBar />
            </div>
          </li>

          <li>
            <FilterByFlag
              setFilterCreateBy={setFilterCreateBy}
            />
          </li>

          <li>
            <FilterByType
              setFilterType={setFilterType}
              listTypes={listTypes}
            />
          </li>

          <li>
            <div>
            
              <Sort
                name='A-Z'
                type='name'
                icon={BiIcons.BiSortAZ}
                BiIcons={BiIcons}
              />
              <Sort
                name='Z-A'
                type='name'
                icon={BiIcons.BiSortZA}
                BiIcons={BiIcons}
              />
            </div>

            <div>
              <Sort
                name='1-9'
                type='attack'
                icon={BiIcons.BiSortUp}
                BiIcons={BiIcons}
              />
              <Sort
                name='9-1'
                type='attack'
                icon={BiIcons.BiSortDown}
                BiIcons={BiIcons}
              />
            </div>
          </li>

          <li>
            <Link to="/about" className='text-dark rounded py-2 w-100 d-inline-block'><FcIcons.FcSettings className='me-2' />Settings</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar;
