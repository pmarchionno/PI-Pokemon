import { Link } from 'react-router-dom';
import iconTypes from '../helpers/iconTypes';
import './card.css';

const Card = (props) => {
  const { id, name, types, image, flagId } = props;

  return (

    <div class="slide-container">
      <div class="wrapper">
        <Link className="Link" to={`/detail/${id}/${flagId}`}>
          <div class="poke-card barbarian">
            <div class="poke-card__image poke-card__image--barbarian">
              <img src={image} alt={name} />
            </div>

            <div class="poke-card__unit-name">{name}</div>
            <div class="poke-card__level poke-card__level--barbarian">Type</div>
            <div class="poke-card__unit-stats poke-card__unit-stats--barbarian clearfix">
              {
                types?.map((el, index) => {
                  return (
                    <div key={`card_type_${el}_${index}_${id}`} className="one-third">
                      <div class="stat"><img src={iconTypes[el]} alt={`icon_${el}`} /></div>
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

    // <div className='card-content'>
    //   <figure className="figureCard">
    //     <img src={image} alt="" />
    //   </figure>
    //   <h5 className="h5Card">{name}</h5>
    //   {
    //     types?.map(el =>  { return(
    //       <div className="contenido-opcion">
    //         <img src={iconTypes[el]} alt={`icon_${el}`} />
    //         <div className="textos111">
    //           <h1 className="titulo111    ">{el}</h1>
    //         </div>
    //         </div>
    //         )

    //     })
    //   }
    // </div>
  )

}

export default Card;