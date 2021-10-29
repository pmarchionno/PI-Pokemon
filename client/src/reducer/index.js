import { GET_ALL_POKES, GET_TYPES, SET_LOADING, SEARCH_POKE_BY_NAME, SEARCH_POKE_BY_ID, NOT_FOUND, SORT_POKE, CREATE_POKE } from '../actions/typeActions';

const initialState = {
  pokemonList: [],
  pokemonFiltered: [],
  pokeDetail: {},
  pokemonTypes: [],
  loading: false,
  pokemonNotFound: false,
}

const pokemon = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POKES:
      return {
        ...state,
        pokemonList: action.payload,
        pokemonFiltered: [],
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    case SEARCH_POKE_BY_NAME:
      return {
        ...state,
        pokemonFiltered: action.payload,
        loading: false
      }
    case SEARCH_POKE_BY_ID:
      return {
        ...state,
        pokeDetail: action.payload,
        loading: false
      }
    case GET_TYPES:
      return {
        ...state,
        pokemonTypes: action.payload
      }
    case NOT_FOUND:
      return {
        ...state,
        pokemonNotFound: true
      }
    case SORT_POKE:
      const { category, orderType } = action.payload;
      let order = orderType === 'asc' ? 1 : -1;
      
      if (category === 'name') {
        return {
          ...state,
          pokemonList: [...state.pokemonList].sort((a, b) => (a[category].toLowerCase() > b[category].toLowerCase()) ? order : order * (-1)),
          pokemonFiltered: [...state.pokemonFiltered].sort((a, b) => (a[category].toLowerCase() > b[category].toLowerCase()) ? order : order * (-1))
        }
      }else{
        return {
          ...state,
          pokemonList: [...state.pokemonList].sort((a, b) => (((a[category] == b[category]) && (a['name'].toLowerCase() > b['name'].toLowerCase())) || (a[category] > b[category])) ? order : order * (-1)),
          pokemonFiltered: [...state.pokemonFiltered].sort((a, b) => (a[category] > b[category]) ? order : order * (-1))
        }
      }
      case CREATE_POKE:
        return {
          ...state,
          pokemonList: [...state.pokemonList, action.payload],
        };
    default: return state
  }
}

export default pokemon;