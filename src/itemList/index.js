import {React, useEffect, useState} from 'react';
import './style.css';
import { Link } from "react-router-dom";

function ItemList(props) {
    const typeClass = {
        grass: 'list-item__type--planta',
        poison: 'list-item__type--veneno',
        water: 'list-item__type--agua',
        fire: 'list-item__type--fuego',
        bug: 'list-item__type--bicho',
        flying: 'list-item__type--volador',
        poison: 'list-item__type--veneno',
        normal: 'list-item__type--normal',
        electric: 'list-item__type--electrico',
        ground: 'list-item__type--tierra',
        fairy: 'list-item__type--hada',
        fighting: 'list-item__type--lucha',
        psychic: 'list-item__type--psiquico',
        rock: 'list-item__type--roca',
        steel: 'list-item__type--acero',
        ice: 'list-item__type--hielo',
        ghost: 'list-item__type--fantasma',
        dragon: 'list-item__type--dragon',
        dark: 'list-item__type--siniestro'
    }

    const [pokemon, setPokemon] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {cargarAllInfo();}, []);

    function cargarAllInfo() {
      fetch(props.url)
      .then(response => response.json())
      .then(data => {
        setPokemon(data);
        setIsLoading(false);
      });
  }
  
  if(isLoading) return (<p>Cargando...</p>);

  return (
    <>
        <Link to={"/detalle/"+pokemon.id}>
        <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
        <p>{pokemon.name}</p>
        {pokemon.types.map( (tipo, index) =>
          <p className={typeClass[tipo.type.name]} key={index}>{tipo.type.name}</p>
        )}
        </Link>
    </>
  );
  }
  
export default ItemList;