import {React, useEffect, useState} from 'react';
import ItemList from '../itemList';
import './style.css';

function Cuerpo() {
  const [listaPokemon, setListaPokemons] = useState([]);
  const [urlPokeApi, setUrlPokeApi] = useState('https://pokeapi.co/api/v2/pokemon?limit=8');
  useEffect(() => {fetchPokemon();}, [])
  function fetchPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=8')
    .then(response => response.json())
    .then(data => {
      setListaPokemons(data.results);
    });
  }
  
  function cargaTodos() {
    fetch(urlPokeApi)
    .then(response => response.json())
    .then(data => {
      setUrlPokeApi(data.next);
      setListaPokemons(listaPokemon.concat(data.results));
    });
  }
  function cargarMas() {
    cargaTodos();
  }
  return (
    <>
      <ul className='listaPokemons'>
          {
            listaPokemon.map( (pokemon, index) => 
              <li key={index}><ItemList key={index} url={pokemon.url}/></li>
            )
          }
        </ul>
        <div className="buttonCargarMas">
          <button className="btn btn-warning" onClick={cargarMas}>Cargar más</button>
        </div>
      

    </>
  );
  }
  
export default Cuerpo;