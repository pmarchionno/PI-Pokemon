import React, { useState } from "react";
import { Link } from "react-router-dom";
import './landingPage.css'
import logo from '../../assets/images/Pokemon-Logo-650x366.png';
import logo2 from '../../assets/images/pokemon-logo-sfondo4.png';

export function LandingPage() {
  const [menu, setMenu] = useState(false);

  function handleClick() {
    setMenu(
      true
    )
  }

  return (
    <div>
      <div class="landingPage">
        <div className='img-logo-content'>
          <img className='img-logo' src={logo} alt="Pokemon" />
        </div>
        <Link to='/home' >
          {/* <img className='img-to-home' src={logo2} alt="Pokemon"  /> */}
          <div className='img-to-home-content'><input type="image" className='img-to-home' name="botondeenvio" src={logo2} alt="Enviar formulario" /></div>
        </Link>
      </div>
    </div>
  )
}

export default LandingPage;
