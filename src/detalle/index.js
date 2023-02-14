import {React, useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import './style.css'

function Detalle() {
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
    const {id} = useParams();
    const url = "https://pokeapi.co/api/v2/pokemon/"+id+"/";
    const [pokemon, setPokemon] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {cargarAllInfo();}, [id]);

    function cargarAllInfo() {
      fetch(url)
      .then(response => response.json())
      .then(data => {
        setPokemon(data);
        setIsLoading(false);
      });
    }
    if(isLoading) return (<p>Cargando...</p>);

  return (
    <>
        <div className='detalle'>
            <div>
                <h1 className='detalleH1'>{pokemon.name} Nº {id}</h1>
            </div>
            <div className='detalleCompleto'>
                <div className='imagen'>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                </div>
                <div className='texto'>
                    <p>Altura: {pokemon.height}</p>
                    <p>Peso: {pokemon.weight}</p>
                    <p>Tipo: </p>
                    {pokemon.types.map((tipo, index) => {
                        return <p className={typeClass[tipo.type.name]+" tipoClase"} key={index}>{tipo.type.name} </p>
                    })}
                    <p>Habilidades:
                        {
                            pokemon.abilities.map((habilidad, index) => {
                                return <span className="habilidad" key={index}> {habilidad.ability.name} </span>
                            })
                        }
                    </p>
                </div>
            </div>
            
        </div>
    </>
  );
  }
  
export default Detalle;