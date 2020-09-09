import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=807')
      .then(response => response.json())
      .then(response => setPokemon(response.results))
      .catch(err => console.log(err))
  }, [fetched])
  
  const fetchPokemon = () => {
    setFetched(true);
    console.log(pokemon);
  }

  return (
    <div className="App">
      <button className="btn btn-dark" onClick={fetchPokemon}>Fetch Pokemon</button>

      {fetched ? pokemon.map((poke, index) => {
          return <div key={index}>{poke.name}</div>
        }) :
        ''
      }
    </div>
  );
}

export default App;
