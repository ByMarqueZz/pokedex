import {React, useEffect, useState} from 'react';
import './style.css';

function PokemonJuego(props) {
    const [pokemon, setPokemon] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [buttons, setButtons] = useState([]);
    const [result, setResult] = useState('');
    const [botonGanar, setBotonGanar] = useState([]);

    useEffect(() => {cargarAllInfo();}, [props.poke]);
    useEffect(() => {setButtons(createButtons());}, [pokemon]);
    function cargarAllInfo() {
      fetch(props.poke.url)
      .then(response => response.json())
      .then(data => {
        setPokemon(data);
        setBotonGanar([]);
        setResult('');
        setIsLoading(false);
      });
    }

    function selectPokemon(name) {
      if(name === pokemon.name) {
        setResult('Correcto!');
        addBotonGanar();
      } else {
        setResult('Incorrecto!');
      }
    }

    function addBotonGanar() {
      let buttons = [];
      buttons.push(<button className='btn btn-outline-success' onClick={props.cargarAllInfo}>Jugar Otra vez</button>);
      setBotonGanar(buttons);
    }

    function createButtons() {
        var buttons = [];
        for (let i = 0; i < 4; i++) {
            let random = Math.floor(Math.random() * props.lista.length);
            let pokemon2 = props.lista[random];
            if (pokemon2 && pokemon2 !== undefined) {
            buttons.push(<button className='botonJugar btn btn-outline-primary' onClick={() => {
                selectPokemon(pokemon2.name);
            }}>{pokemon2.name}</button>);
            }
        }
        buttons.push(<button className='botonJugar btn btn-outline-primary' onClick={() => {
          selectPokemon(pokemon.name);}}
        >{pokemon.name}</button>);
        buttons.sort(() => Math.random() - 0.5);
        return buttons;
    }

  if(isLoading) return (<p>Cargando...</p>);
    return (
        <>
            <audio src="./assets/audio.mp3" autoPlay/>
            <div className='pokemonImgDiv'>
                <img className="pokemonJugar" src={pokemon.sprites.front_default} alt={pokemon.name} draggable="false"/>
            </div>
            <div className='botons'>
                <ul className='listaBotones'>
                {buttons.map((button, index) => <li key={index}>{button}</li>)}
                </ul>
            </div>
            <div className='result'>
              <b>{result}</b>
              <ul className='botonGanar'>
                {botonGanar.map((button, index) => <li key={index}>{button}</li>)}
              </ul>
            </div>
        </>
    );
}
  
export default PokemonJuego;