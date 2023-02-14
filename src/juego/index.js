import {React, useEffect, useState} from 'react';
import PokemonJuego from '../pokemonJuego';
import './style.css';

function Juego() {
    const [isLoading, setIsLoading] = useState(true);
    const [listaNombres, setListaNombres] = useState([]);
    const [pokemon, setPokemon] = useState(null);
    useEffect(() => {cargarAllInfo();}, []);
    useEffect(() => {selectPokemon();}, [listaNombres]);

    function cargarAllInfo() {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=1279')
        .then(response => response.json())
        .then(data => {
            setListaNombres(data.results);
            setIsLoading(false);
        });
    }
    function selectPokemon() {
        let random = Math.floor(Math.random() * listaNombres.length);
        let pokemon2 = listaNombres[random];
        if (pokemon2 && pokemon2 !== undefined) {
            setPokemon(pokemon2);
        }
    }
    if(isLoading) return (<p>Cargando...</p>);
    if(pokemon) return (
        <>
            <div className='headerGame'>
                <h1>Who's that pokemon?</h1>
            </div>
            <div className='pokemonAleatorio'>
                <audio src="./assets/audio.mp3" autoPlay controls className='audio'/>
                <PokemonJuego poke={pokemon} lista={listaNombres} cargarAllInfo={selectPokemon}/>
            </div>
        </>
    );
}
  
export default Juego;