import './card.css';

const Card = (props) => {
  const { name, types, image, flagId } = props;

  return (
    <div className='card'>
      <figure className="figureCard">
        <img src={image} alt="" />
      </figure>
      <h5 className="h5Card">{name}</h5>
      <span className="spanCard">{types}</span>
    </div>
  )

}

export default Card;