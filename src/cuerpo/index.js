import {React, useEffect, useState} from 'react';

function Cuerpo() {
  const [listaPokemon, setListaPokemons] = useState([]);
  const [listaCompleta, setlistaCompleta] = useState([]);
  const [urlPokeApi, setUrlPokeApi] = useState('https://pokeapi.co/api/v2/pokemon?limit=8');
  useEffect(() => {fetchPokemon();}, [])
  function fetchPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=8')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setListaPokemons(data.results);
      cargarAllInfo();
    });
  }
  function cargarAllInfo() {
    listaPokemon.map( (pokemon, index) => {
      fetch(pokemon.url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setlistaCompleta(listaCompleta.push(data));
      });
    })
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
          listaCompleta.map( (pokemon) => 
            <li>{pokemon.name}</li>
          )
        }
      </ul>
      <button onClick={cargarMas}>Cargar más</button>
    </>
  );
  }
  
export default Cuerpo;