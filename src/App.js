import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import * as pokemonActions from './store/pokemon/actions';
// import * as pokemonApi from './api/pokemon';

function PokemonCard ({ name }) {
  return (
    <div>{name}</div>
  );
}

function AddPokemonForm ({ onSubmit = () => {}, onError = () => {} }) {
  const [err, setErr] = useState('');
  function handleError (error) {
    setErr(error.message);
  }
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      event.persist();

      const name = event.target.pokemonName.value;
      const id = Math.random();
      onSubmit({ name, generatedId: id })
        .then(() => {
          event.target.reset();
          setErr('');
        })
        .catch(err => {
          handleError(err);
          onError(err);
        });
    }}>
      <input name="pokemonName" />
      <button>Tambah</button>
      {err && <span>{err}</span>}
    </form>
  );
}

function Navbar () {
  const userName = useSelector(state => state.user.name);
  return (
    <div>Ini Navbar lho. Halo, {userName}</div>
  );
}

function MyProfile () {
  const user = useSelector(state => state.user);
  return (
    <div>
      <div>Nama: {user.name}</div>
      <div>Email: {user.email}</div>
    </div>
  )
}

function App() {
  
  const pokemons = useSelector(state => state.pokemon.entries);
  
  const dispatch = useDispatch();
  
  function handleSubmit (data) {
    const newPokemon = { id: data.generatedId, name: data.name };

    // return pokemonApi.createPokemon()
    //   .then(() => {
    //     dispatch( actions.addPokemon(newPokemon) );
    //   });

    return dispatch( pokemonActions.addPokemon(newPokemon) );
  }

  return (
    <div className="App">
      <header className="App-header">
        List Pokemon
      </header>
      <hr />
      <Navbar />
      <hr />
      <MyProfile />
      <hr />

      {pokemons.map(pokemon => (
        <PokemonCard name={pokemon.name} key={pokemon.id} />
      ))}

      <button onClick={() => {
        dispatch( pokemonActions.getPokemons() );
      }}>Get More</button>

      <AddPokemonForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
