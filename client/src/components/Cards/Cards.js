import Card from "../Card/Card";


const Cards = (props) => {
  const { listToDraw } = props;

  return (
    <div>
      {listToDraw?.map(poke => {
        return (
          <div>
            <Card
              key = {poke.id}
              name = {poke?.name}
              types = {poke?.types}
              image = {poke?.image}
              flagId = {poke?.flagId}
            />
          </div>
        )
      })
      }
    </div>
  )
}

export default Cards;