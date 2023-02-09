import {React, useEffect, useState} from 'react';

function Cuerpo() {
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
  
export default Cuerpo;