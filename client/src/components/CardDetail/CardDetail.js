import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './cardDetail.css';
import iconTypes from '../helpers/iconTypes';
import { getPokemonById, setLoading } from '../../actions';
import Loader from '../Loader/Loader';
import NotFound from '../NotFound/NotFound';

const CardDetail = () => {
  const { id, flagId } = useParams();

  const dispatch = useDispatch();
  const pokeDetail = useSelector(state => state.pokeDetail);
  const loading = useSelector(state => state.loading);

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(getPokemonById(id, flagId))
  }, [])

  return (
    loading
      ? <Loader />
      :
      <div>
        {pokeDetail["id"]
          ?

          <div id="cards">

            <figure class="card card--normal">
              <div class={`card__image-container ${pokeDetail.types[0]}`}>
                <img src={pokeDetail.image} alt={pokeDetail.name} class="card__image" />
              </div>

              <figcaption class="card__caption">
                <h1 class="card__name">{pokeDetail.name.charAt(0).toUpperCase() + pokeDetail.name.slice(1)}</h1>

                <h3 class="card__type">
                  Id: {pokeDetail.id}
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
                  {/* <h4 class="card__ability">
                    <span class="card__label">Types</span>
                    Run Away
                  </h4>
                  <h4 class="card__ability">
                    <span class="card__label">Hidden Ability</span>
                    Anticipation
                    <img src={iconTypes[pokeDetail.name]} alt={pokeDetail.name} class="card__image" />
                  </h4> */}

                  {
                    pokeDetail.types?.map((el, index) => {
                      return (
                        <div key={`card_type_${el}_${index}_${id}`} className="one-third">
                          <div class="stat"><img className='img-stat' src={iconTypes[el]} alt={`icon_${el}`} /></div>
                          <div class="stat-value">{el}</div>
                        </div>
                      )
                    })
                  }

                </div>
              </figcaption>
            </figure>
          </div>
          : <div><NotFound /></div>
        }

      </div>
  )
}

export default CardDetail;
