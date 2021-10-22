import { GET_ALL_POKES, CREATE_POKE, SET_LOADING, SEARCH_POKE_BY_NAME, NOT_FOUND, GET_TYPES } from './typeActions';
import axios from 'axios';

export function getAllPokemon() {
  return dispatch => {
    return axios.get('http://localhost:3001/pokemon').then(obj => {
      dispatch({
        type: GET_ALL_POKES,
        payload: obj.data
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
      console.log(error)
      return dispatch({
        type: NOT_FOUND,
        payload: error
      })
    }
  }
}

export function getPokemonTyes(){
  return async (dispatch) => {
    try {
      const types = await axios.get(`http://localhost:3001/types`)
      return dispatch({
        type: GET_TYPES,
        payload: types.data
      })
    } catch (error) {
      console.log(error)
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

