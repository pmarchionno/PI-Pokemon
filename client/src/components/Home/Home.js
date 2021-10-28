import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemon, setLoading, getPokemonTyes } from "../../actions";
import Cards from "../Cards/Cards";
import Loader from "../Loader/Loader";
import Navbar from "../Navbar/Navbar";
import NotFound from "../NotFound/NotFound";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";
import Sidebar from "../Sidebar/Sidebar";
import './home.css';

const Home = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const listToDraw = useSelector((state) => state.pokemonList);
  const listFiltered = useSelector((state) => state.pokemonFiltered)
  const listTypes = useSelector((state) => state.pokemonTypes);
  const pokeNotFound = useSelector((state) => state.pokeNotFound);

  const [data, setData] = useState([]);
  const [filterCreateBy, setFilterCreateBy] = useState('');
  const [filterType, setFilterType] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(getPokemonTyes())
    dispatch(getAllPokemon());
  }, [dispatch])

  useEffect(() => {
    // let arr = showResultFiltered? filteredBreeds : listBreedsToShow;
    let pages = 0;

    let data = showSearch ? listFiltered : listToDraw;
    if (filterCreateBy === 'My') data = data.filter((el) => el.flagId)
    if (filterCreateBy === 'API') data = data.filter((el) => !el.flagId)
    if (filterType?.length > 0) data = data.filter((el) => el.types?.includes(filterType))

    setData(data);

    pages = 1 + Math.ceil((data.length - 9) / 12);
    setTotalPages(pages);
  });

  function pagination() {
    // let data = listToDraw;
    // if (filterCreateBy === 'My') data = data.filter((el) => el.flagId)
    // if (filterCreateBy === 'API') data = data.filter((el) => !el.flagId)
    // if (filterType?.length > 0) data = data.filter((el) => el.types?.includes(filterType))
    let initial = 0;
    let final = 0;
    if (currentPage <= 1) {
      initial = 0;
      final = 9;
    } else {
      initial = 9 + (currentPage - 2) * 12;
      final = initial + 12
    }

    return data.slice(initial, final)
  }

  return (
    <div className='app-content-sup'>
      <Navbar />

      <div className='app-content'>
        <div>
          <Sidebar
            setFilterCreateBy={setFilterCreateBy}
            setFilterType={setFilterType}
            setCurrentPage={setCurrentPage}
            listTypes={listTypes}
          />
        </div>
        <div className='home-content'>
          <SearchBar
            setShowSearch={setShowSearch}
            setCurrentPage={setCurrentPage}
          />

          <div className='abc'>
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages} />
          </div>
          {loading
            ? <Loader />
            : showSearch && listFiltered?.length <= 0
              ? <NotFound />
              : <Cards
                listToDraw={pagination()} />
          }
        </div>
      </div>
    </div>
  )
}

export default Home;
