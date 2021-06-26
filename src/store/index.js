import { compose, applyMiddleware, combineReducers } from 'redux';
import { createStore } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './user/reducer';
import pokemonReducer from './pokemon/reducer';

/**
 * interface Pokemon {
 *   id: number;
 *   name: string;
 * }
 * 
 * 
 */


// users
// session
// courses
// curriculum
// promo
// 

const rootReducer = combineReducers({
  user: userReducer,
  pokemon: pokemonReducer,
})

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
);

export default store;
