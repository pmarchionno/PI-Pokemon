import { Link } from 'react-router-dom';
import iconTypes from '../helpers/iconTypes';
import './card.css';

const Card = (props) => {
  const { id, name, types, image, flagId } = props;

  return (

    <div class="slide-container">
      <div class="wrapper">
        <Link className="Link" to={`/detail/${id}/${flagId}`}>
          <div className="poke-card poke">
            <div className={`poke-card__image poke-card__image--poke ${types[0]}`}>
              <img src={image} alt={name} />
            </div>

            <div class="poke-card__unit-name">{name}</div>
            <div class="poke-card__level poke-card__level--poke">Type</div>
            <div class="poke-card__unit-stats poke-card__unit-stats--poke clearfix">
              {
                types?.map((el, index) => {
                  return (
                    <div key={`card_type_${el}_${index}_${id}`} className="one-third">
                      <div class="stat"><img className='img-stat' src={iconTypes[el]} alt={`icon_${el}`} /></div>
                      <div class="stat-value">{el}</div>
                    </div>
                  )
                })
              }
            </div>
          </div> {/* end poke-card barbarian*/}
        </Link>
      </div> {/* end wrapper */}
    </div>
  )
}

export default Card;