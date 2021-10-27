import { useDispatch } from 'react-redux';
import { sortPokemons } from '../../actions';
import './sort.css';

const Sort = (props) => {
  const {name, category, orderType, icon} = props;
  const dispatch = useDispatch();

  function onClick(e){
    e.preventDefault();
    dispatch(sortPokemons({category: category, orderType: orderType}))
  }

  return (
    <div>
      <button class="btn ejemplo1" onClick={(e) => onClick(e)}> {icon()}</button>  
    </div>
  )
}

export default Sort;
