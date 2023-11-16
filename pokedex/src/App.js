import { createGlobalStyle } from 'styled-components';
import { Router } from './Router/Router';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { GlobalContext } from './contexts/GlobalContexts';


const GlobalStyle  = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
  }
`

function App() {

  //Requisição e armazanemanto em um estado: 
  const [pokemons, setPokemon] = useState([]);
  const [pokedex, setPokedex ] = useState([]);


  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    var endpoints = [];
    for (var i = 1; i < 50; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemon(res));
  };

  const addToPokedex = (pokemonToAdd) => {
    const estaNaPokedex = pokedex.find((pokemonNaPokedex) => pokemonNaPokedex.name === pokemonToAdd.name
    )

    if(!estaNaPokedex){
      const newPokedex = [...pokedex, pokemonToAdd];
      setPokedex(newPokedex)
    }
  }

  //Criando um contexto Global:
  const context = {
    pokemons,
    pokedex,
  }
  //
  return (
    // Chamando um contexto Global:
    <GlobalContext.Provider value={context}>
    <GlobalStyle/>
    <Router addToPokedex={addToPokedex}/>
    </GlobalContext.Provider>
  );
}

export default App;