import {React} from 'react';
import './style.css';

function Home() {
  
  return (
    <>
      <div className='headerHome'>
        <h1>La mejor pokedex</h1>
      </div>
      <div className='promo'>
        <p>Hecho por Juan Antonio Márquez con React <img width='20px' src='./assets/react.png'/></p>
        <p>Código fuente disponible en <a href='https://github.com/ByMarqueZz/pokedex' target='_blank'><img width='20px' src='./assets/github.svg' />Github</a></p>
      </div>      
      <img src="./assets/fotoAdivina.png"></img>
    </>
  );
  }
  
export default Home;