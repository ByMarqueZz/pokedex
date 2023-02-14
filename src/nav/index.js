import {React, useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import './style.css';

function Nav(props) {
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [listaNombres, setListaNombres] = useState([]);
    const [listaFiltrada, setListaFiltrada] = useState([]);
    useEffect(() => {cargarAllInfo();}, []);

    function cargarAllInfo() {
        fetch(props.url)
        .then(response => response.json())
        .then(data => {
            setListaNombres(data.results);
            setIsLoading(false);
        });
    }

    function filtrarLista() {
        const listaFiltrada = listaNombres.filter( (pokemon) => {
            return pokemon.name.includes(input.toLocaleLowerCase());
        });
        setListaFiltrada(listaFiltrada);
    }
    function borrarInput() {
        setInput('');
        setListaFiltrada([]);
    }
    if(isLoading) return (<p>Cargando...</p>);
    return (
        <>
            <div className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Buscar pokemon" aria-label="Search" value={input} onChange={e => 
                    {
                        setInput(e.target.value);
                        filtrarLista();
                    }} />
                <button className="btn btn-outline-success" onClick={borrarInput}>Borrar</button>
            </div>
            <ul className='listaPokemonFiltrados'>
                {listaFiltrada.map( (pokemon, index) =>{
                    return (
                        <li key={index}>
                            <Link to={"/detalle/"+pokemon.name}>
                                {pokemon.name}
                            </Link>
                        </li>
                    )})
                }
            </ul>
            
        </>
    );
}
  
export default Nav;