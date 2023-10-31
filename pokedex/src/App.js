import { createGlobalStyle } from 'styled-components';
import { Router } from './Router/Router';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { GlobalContext } from './contexts/GlobalContexts';
import {BASE_URL} from "../src/contants"


const GlobalStyle  = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
  }
`

function App() {

  //Requisição e armazanemanto em um estado: 
  const [pokemons, setPokemons] = useState([]);


  const getAllPokemons = async () => {
  try{
    const response = await axios.get(BASE_URL)
        setPokemons(response.data.results);
        console.log(response.data.results)
      }catch(error) {
      console.log(error.response)
    }
  };

  useEffect(() => {
    getAllPokemons();
  }, []);
  //

  //Criando um contexto Global:
  const context = {
    pokemons
  }
  //
  return (
    // Chamando um contexto Global:
    <GlobalContext.Provider value={context}>
    <GlobalStyle/>
    <Router/>
    </GlobalContext.Provider>
  );
}

export default App;
