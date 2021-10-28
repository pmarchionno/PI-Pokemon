import React from 'react'
import { Link } from 'react-router-dom';
import './notFound.css'
import pokeNotFound from '../../assets/images/not-found.gif'

const NotFound = () => {
  return (
    <div className="poke-not-found">
      <img
        src={pokeNotFound}
        alt='Pikachu loader'
        width="300"
        height="250"
      />
      <span className="loading">Pokémon Not Found</span>
    </div>
  )
}

export default NotFound;

