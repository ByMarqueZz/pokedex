import './App.css';
import {React} from 'react';
import Header from './header';
import Cuerpo from './cuerpo';
import Home from './landing-page';
import Detalle from './detalle';
import Juego from './juego';
import Footer from './footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Header />
        <div className='main'>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/pokemons" element={<Cuerpo />}></Route>
            <Route path="/jugar" element={<Juego />}></Route>
            **<Route path="/detalle/:id" element={<Detalle />}></Route>**
            **<Route path="*" element={<h1>404: Not Found</h1>}></Route>**
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </>  
  );
}

export default App;
