import {React} from 'react';
import { Link } from "react-router-dom";
import './style.css';

function Home() {
  
  return (
    <>
      <div className='headerHome'>
        <h1>La mejor pokedex</h1>
      </div>
      <div className='promo'>
        <p>Hecho por <a  className='enlaceWho' href='https://github.com/ByMarqueZz' target='_blank'><b>Juan Antonio Márquez</b></a> con React <img width='20px' src='./assets/react.png'/></p>
        <p>Código fuente disponible en <a  className='enlaceWho' href='https://github.com/ByMarqueZz/pokedex' target='_blank'><img width='20px' src='./assets/github.svg' /><b> Github</b></a></p>
      </div> 
      <div className='tutorial'>
        <div className='tutorial_1'>
          <div className='tutorial_1_1'>
            <h2>¿Cómo funciona?</h2>
            <p>La pokedex es una aplicación web que te permite buscar y ver información de los pokemons de la primera generación.</p>
            <p>Para buscar un pokemon, simplemente escribe su nombre en el buscador y pulsa en el pokemon.</p>
          </div>
          <div className='tutorial_1_2'><img src="./assets/tutorial_1.png"></img></div>
        </div>
        <div className='tutorial_1'>
          <div className='tutorial_1_1'><img src="./assets/tutorial_2.png"></img></div>
          <div className='tutorial_1_2'>
            <h2>¿Qué puedo hacer?</h2>
            <p>Informarte sobre las habilidades de los pokemons en el apartado <Link to="/pokemons" className='enlaceWho'><b>Pokemons</b></Link></p>
            <p>Hasta jugar a <Link to="/jugar" className='enlaceWho'><b>Who's that Pokemon?</b></Link></p>
          </div>
        </div>
      </div>     
      
    </>
  );
  }
  
export default Home;