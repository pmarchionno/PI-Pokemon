import { GET_ALL_POKES, CREATE_POKE, SET_LOADING, SEARCH_POKE_BY_NAME, SEARCH_POKE_BY_ID, NOT_FOUND, GET_TYPES, SORT_POKE } from './typeActions';
import axios from 'axios';
import { FcNext } from 'react-icons/fc';

export function addPokemon(objPoke){
  return dispatch => {
    return axios.post('http://localhost:3001/pokemon', objPoke)
      .then(obj => {
        dispatch({
          type: CREATE_POKE,
          payload: obj.data
        })
      })
      .catch(error => {
        return dispatch({
          type: NOT_FOUND,
          payload: error
        })
      })
  }
  
}
export function getAllPokemon() {
  return dispatch => {
    return axios.get('http://localhost:3001/pokemon')
      .then(obj => {
        dispatch({
          type: GET_ALL_POKES,
          payload: obj.data
        })
      })
      .catch(error => {
        return dispatch({
          type: NOT_FOUND,
          payload: error
        })
      })
  }
}

export function getPokemonByName(name) {
  return async (dispatch) => {
    try {
      const poke = await axios.get(`http://localhost:3001/pokemon?name=${name}`)
      return dispatch({
        type: SEARCH_POKE_BY_NAME,
        payload: poke.data
      })
    } catch (error) {
      return dispatch({
        type: SEARCH_POKE_BY_NAME,
        payload: []
      })
    }
  }
}

export function getPokemonById(id, flagId = false) {
  return async (dispatch) => {
    try {
      const poke = await axios.get(`http://localhost:3001/pokemon/${id}/${flagId}`)

      return dispatch({
        type: SEARCH_POKE_BY_ID,
        payload: poke.data
      })
    } catch (error) {
      return dispatch({
        type: NOT_FOUND,
        payload: error
      })
    }
  }
}

export function getPokemonTyes() {
  return async (dispatch) => {
    try {
      const types = await axios.get(`http://localhost:3001/types`)
      return dispatch({
        type: GET_TYPES,
        payload: types.data
      })
    } catch (error) {
      return dispatch({
        type: NOT_FOUND,
        payload: error
      })
    }
  }
}

export const setLoading = function (payload) {
  return {
    type: SET_LOADING,
    payload
  }
}

export const sortPokemons = function (payload) {
  return {
    type: SORT_POKE,
    payload //{category, sortOrder}
  }
}