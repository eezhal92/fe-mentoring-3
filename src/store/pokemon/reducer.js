import * as types from './action-types';
import { combineReducers } from 'redux';

const initialState = [{ id: 1, name: 'pikachu' }, { id: 2, name: 'bla bla' }];

function pokemonReducer(state = initialState, action) {
  switch(action.type) {
    case types.RECEIVE_POKEMONS:
      // state.pokemons = action.payload.pokemons
      return [...state, ...action.payload.pokemons];
    case types.ADD_POKEMON:
      const { newPokemon } = action.payload;
      const existingPokemons = state;
      return existingPokemons.concat(newPokemon);
    default:
      return state;
  }
}

function somethingReducer (state = false) {
  return state;
}

export default combineReducers({
  entries: pokemonReducer,
  something: somethingReducer,
})