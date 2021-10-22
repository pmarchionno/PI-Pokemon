import { GET_ALL_POKES, GET_TYPES, SET_LOADING, SEARCH_POKE_BY_NAME, NOT_FOUND } from '../actions/typeActions';

const initialState = {
  pokemonList: [],
  pokemonFilered: [],
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
        pokemonFilered: [],
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
        pokemonFilered: action.payload
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
    default: return state
  }
}

export default pokemon;