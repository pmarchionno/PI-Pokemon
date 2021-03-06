import { useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
import * as BiIcons from 'react-icons/bi';
import FilterByFlag from '../filters/FilterByFlag/FilterByFlag';
import FilterByType from '../filters/FilterByType/FilterByType';
import { FcAlphabeticalSortingAz } from "react-icons/fc";
import Sort from '../Sort/Sort';

const Sidebar = (props) => {
  const { setFilterCreateBy, setFilterType, listTypes, setCurrentPage } = props;
  const [option, setOption] = useState(0);

  return (
    <div className='sidebar'>
      <ul>
        {/* <li>
          <Link to="/home" className='text-dark rounded py-2 w-100 d-inline-block'><FaIcons.FaHome className='me-2' /><FcIcons.FcHome className='me-2' />Home</Link>
        </li> */}

        {/* <li>
            <div className='searchBar'>
              <SearchBar />
            </div>
          </li> */}

        <li>
          <FilterByFlag
            setFilterCreateBy={setFilterCreateBy}
            setCurrentPage={setCurrentPage}
          />
        </li>

        <li>
          <FilterByType
            setFilterType={setFilterType}
            listTypes={listTypes}
            setCurrentPage={setCurrentPage}
          />
        </li>

        <li>
          <div class="info">
            <p>Order</p>
          </div>
          <div className='li-order'>
            <p className='title-order'>Name: </p>
            <Sort
              name='A-Z'
              category='name'
              orderType='asc'
              icon={BiIcons.BiSortAZ}
              BiIcons={BiIcons}
              option={1}
              setOption={setOption}
              active={option===1}
            />
            <Sort
              name='Z-A'
              category='name'
              orderType='desc'
              icon={BiIcons.BiSortZA}
              BiIcons={BiIcons}
              option={2}
              setOption={setOption}
              active={option===2}
            />
          </div>

          <div className='li-order'>
          <p className='title-order'>Attack: </p>
            <Sort
              name='1-9'
              category='attack'
              orderType='asc'
              icon={BiIcons.BiSortUp}
              BiIcons={BiIcons}
              option={3}
              setOption={setOption}
              active={option===3}
            />
            <Sort
              name='9-1'
              category='attack'
              orderType='desc'
              icon={BiIcons.BiSortDown}
              BiIcons={BiIcons}
              option={4}
              setOption={setOption}
              active={option===4}
            />
          </div>
        </li>

        {/* <li>
          <Link to="/about" className='text-dark rounded py-2 w-100 d-inline-block'><FcIcons.FcSettings className='me-2' />Settings</Link>
        </li> */}
      </ul>
    </div>

  )
}

export default Sidebar;
