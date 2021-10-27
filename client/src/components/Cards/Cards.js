import Card from "../Card/Card";
import './cards.css';

const Cards = (props) => {
  const { listToDraw } = props;

  return (
    <div className='cards-content'>
      {listToDraw?.map(poke => {
        return (
          <div key={`cards_${poke.id}`}>
            <Card
              key={`card_${poke.id}`}
              id={poke.id}
              name={poke?.name}
              types={poke?.types}
              image={poke?.image}
              flagId={poke?.flagId}
            />
          </div>
        )
      })
      }
    </div>
  )
}

export default Cards;