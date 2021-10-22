import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemon, setLoading, getPokemonTyes } from "../../actions";
import Cards from "../Cards/Cards";
import Loader from "../Loader/Loader";
import Navbar from "../Navbar/Navbar";
import NotFound from "../NotFound/NotFound";
import SearchBar from "../SearchBar/SearchBar";
import Sidebar from "../Sidebar/Sidebar";
import './home.css';

const Home = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const listToDraw = useSelector((state) => state.pokemonList);
  const listTypes = useSelector((state) => state.pokemonTypes);
  const pokeNotFound = useSelector((state) => state.pokeNotFound);
  const [page, setPage] = useState(0);
  const [filterCreateBy, setFilterCreateBy] = useState('');
  const [filterType, setFilterType] = useState('');

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(getPokemonTyes())
    dispatch(getAllPokemon());
  }, [dispatch])

  function pagination() {
    let data = listToDraw;
    if(filterCreateBy === 'My') data = data.filter((el) => el.flagId)
    if(filterCreateBy === 'API') data = data.filter((el) => !el.flagId)
    if(filterType?.length > 0) data = data.filter((el) => el.types?.includes(filterType))
    let initial = page * 8;
    let final = initial + 8;
    if (page === 0) {
      initial = 0;
      final = 9;
    } else {
      initial = 9 + page * 12;
      final = initial + 12
    }

    return data.slice(initial, final)
  }

  return (
    <div className='app-content'>
      <Navbar />
      <Sidebar
        setFilterCreateBy={setFilterCreateBy}
        setFilterType={setFilterType}
        listTypes={listTypes}
      />
      <div className='home-content'>
        <SearchBar />
        {loading
          ? <Loader />
          : pokeNotFound
            ? <NotFound />
            : <Cards
              listToDraw={pagination()} />
        }
      </div>
    </div>
  )
}

export default Home;
