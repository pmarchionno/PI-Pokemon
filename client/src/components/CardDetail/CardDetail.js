import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './cardDetail.css';
import iconTypes from '../helpers/iconTypes';
import { getPokemonById } from '../../actions';
import Loader from '../Loader/Loader';

const CardDetail = () => {
  const {id, flagId} = useParams();

  const dispatch = useDispatch();
  const pokeDetail = useSelector(state => state.pokeDetail);

  useEffect(() => {
    dispatch(getPokemonById(id, flagId))
  }, [])

  return (
    <div>
      {pokeDetail["id"] > 0
      ?

      <div id="cards">

        <figure class="card card--normal">
          <div class="card__image-container">
            <img src={pokeDetail.image} alt={pokeDetail.name} class="card__image" />
          </div>

          <figcaption class="card__caption">
            <h1 class="card__name">{pokeDetail.name.charAt(0).toUpperCase() + pokeDetail.name.slice(1)}</h1>

            <h3 class="card__type">
              normal
            </h3>

            <table class="card__stats">
              <tbody><tr>
                <th>Life</th>
                <td>{pokeDetail.life}</td>
              </tr>
                <tr>
                  <th>Attack</th>
                  <td>{pokeDetail.attack}</td>
                </tr>

                <tr>
                  <th>Defense</th>
                  <td>{pokeDetail.defense}</td>
                </tr>

                <tr>
                  <th>Speed</th>
                  <td>{pokeDetail.speed}</td>
                </tr>
                <tr>
                  <th>Height</th>
                  <td>{pokeDetail.height}</td>
                </tr>
                <tr>
                  <th>Weight</th>
                  <td>{pokeDetail.weight}</td>
                </tr>
              </tbody></table>

            <div class="card__abilities">
              <h4 class="card__ability">
                <span class="card__label">Ability</span>
                Run Away
              </h4>
              <h4 class="card__ability">
                <span class="card__label">Hidden Ability</span>
                Anticipation
                <img src={iconTypes[pokeDetail.name]} alt={pokeDetail.name} class="card__image" />
              </h4>
            </div>
          </figcaption>
        </figure>
      </div>
      : <div><Loader/></div>
      }
      
    </div>
  )
}

export default CardDetail;
