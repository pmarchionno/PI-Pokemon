import React from 'react'
import './notFound.css'
import pokeNotFound from '../../assets/images/not-found.gif'

const NotFound = () => {
  return (
    <div className="poke-not-found">
      <img
        src={pokeNotFound}
        alt='Pikachu loader'
      />
      <span className="title">Pokémon not Found</span>
    </div>
  )
}

export default NotFound();

