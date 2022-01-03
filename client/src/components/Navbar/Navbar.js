import { NavLink } from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/images/Pokemon-Logo-650x366.png';
import github from '../../assets/images/github.png';
import linkedin from '../../assets/images/linkedin.png';


const Navbar = () => {
  return (
    <div className='menu'>
      <div className='menu-span'>
        <img className="menu-img" src={logo} alt="logo" />

        <div className='menu-dist-item'>
          <div className='social-media'>
            <a href="https://github.com/pmarchionno" target='_blank' rel='noopener noreferrer'><img className="social-media-img" src={github} alt="logo" /></a>
            <a></a>
            <a href="https://www.linkedin.com/in/pablo-marchionno/" target='_blank' rel='noopener noreferrer'><img className="social-media-img" src={linkedin} alt="logo" /></a>
          </div>
        </div>

        <div className='menu-dist-item'>
          <ul className="list">
            <li key={'navbar-home'} className="list-item">
              <NavLink exact to="/home" >Home</NavLink>
            </li>
            <li key={'navbar-form'} className="list-item">
              <NavLink exact to="/form" >Create Pokémon</NavLink>
            </li>
            <li key={'navbar-about'} className="list-item">
              <NavLink exact to="/about" >About</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
