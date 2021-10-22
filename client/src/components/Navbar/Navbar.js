import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='menu'>

      <div className='social-media'>
        <a href="www.linkedin.com/in/pablo-marchionno" target='_blank' rel='noopener noreferrer' ><i class="fab fa-linkedin"></i></a>
        <a href="https://github.com/pmarchionno" target='_blank' rel='noopener noreferrer' ><i class="fab fa-github-square"></i></a>
      </div>
      <div>
        <ul className="list">
          <li className="list-item">
            <NavLink exact to="/home" >Home</NavLink>
          </li>
          <li className="list-item">
            <NavLink exact to="/form" >Create Pokémon</NavLink>
          </li>
          <li className="list-item">
            <NavLink exact to="/about" >About</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
