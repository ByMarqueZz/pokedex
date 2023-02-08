import './App.css';
import {React} from 'react';
import Header from './header';

function App() {
  // const [pokemons, setPokemons] = React.useState([]);
  // useEffect(() => {fetchPokemons();}, [])
  // function fetchPokemons() {
  //   Api.getPokemons()
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  // }
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
