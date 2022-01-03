import { useDispatch } from 'react-redux';
import { sortPokemons } from '../../actions';
import './sort.css';

const Sort = (props) => {
  const {category, orderType, icon, option, setOption, active} = props;
  const dispatch = useDispatch();

  function onClick(e){
    e.preventDefault();
    setOption(option);
    dispatch(sortPokemons({category: category, orderType: orderType}))
  }

  return (
    <div>
      <button className={active? "btn ejemplo1 active-sort" : "btn ejemplo1"} onClick={(e) => onClick(e)}>{active} {icon()}</button>  
    </div>
  )
}

export default Sort;
