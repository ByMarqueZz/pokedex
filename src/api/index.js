
function Api() {
    function getPokemons() {
        return fetch('https://pokeapi.co/api/v2/pokemon?limit=8')
    }
  }
  
export default Api;