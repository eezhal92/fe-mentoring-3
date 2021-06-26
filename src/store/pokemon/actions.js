import * as pokemonApi from '../../api/pokemon';
import * as types from './action-types';

const creators = {
  addPokemon(newPokemon) {
    return {
      type: types.ADD_POKEMON,
      payload: { newPokemon },
    }
  },
  receivePokemons(data) {
    return {
      type: types.RECEIVE_POKEMONS,
      payload: { pokemons: data },
    }
  }
}


export function addPokemon(newPokemon) {
  return (dispatch, getState) => {
    return pokemonApi.createPokemon(newPokemon)
      .then((data) => {
        dispatch( creators.addPokemon(newPokemon) );
      });
  }
}

export function getPokemons(page = 1) {
  return (dispatch, getState) => {
    return pokemonApi.getPokemons(page)
      .then((data) => {
        dispatch( creators.receivePokemons(data) );
      });
  }
}