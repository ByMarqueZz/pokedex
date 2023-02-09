import './App.css';
import {React, useEffect, useState} from 'react';
import Header from './header';

function App() {
  const [listaPokemon, setListaPokemons] = useState([]);
  const [urlPokeApi, setUrlPokeApi] = useState('https://pokeapi.co/api/v2/pokemon?limit=8');
  useEffect(() => {fetchPokemon();}, [])
  function fetchPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=8')
    .then(response => response.json())
    .then(data => {console.log(data);setListaPokemons(data.results)});
  }
  function cargaTodos() {
    fetch(urlPokeApi)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setUrlPokeApi(data.next);
      setListaPokemons(listaPokemon.concat(data.results));
    });
  }
  function cargarMas() {
    cargaTodos();
  }
  return (
    <>
      <Header />
      <ul>
        {
          listaPokemon.map( (pokemon, index) => 
            <li key={index}>{pokemon.name}</li>
          )
        }
      </ul>
      <button onClick={cargarMas}>Cargar más</button>
    </>  
  );
}

export default App;
