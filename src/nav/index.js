import {React, useEffect, useState} from 'react';
import ItemList from '../itemList';
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
            return pokemon.name.includes(input);
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
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={input} onChange={e => 
                    {
                        setInput(e.target.value);
                        filtrarLista();
                    }} />
                <button className="btn btn-outline-success" onClick={borrarInput}>Borrar</button>
            </form>
            <ul className='listaPokemonFiltrados'>
                {listaFiltrada.map( (pokemon, index) =>{
                    return (
                        <li>
                            <ItemList key={index} url={pokemon.url}/>
                        </li>
                        
                    )
                    
                })}
            </ul>
            
        </>
    );
}
  
export default Nav;