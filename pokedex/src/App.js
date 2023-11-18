import { createGlobalStyle } from "styled-components";
import { Router } from "./Router/Router";
import axios from "axios";
import { useEffect, useState } from "react";
import { GlobalContext } from "./contexts/GlobalContexts";
import { BASE_URL } from "./contants";

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
  }
`;

function App() {
  //Requisição e armazanemanto em um estado:
  const [pokeList, setPokeList] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    getPokelist();
  }, []);

  const getPokelist = async () => {
    try {
      const response = await axios.get(`${BASE_URL}?limit=45&offset=0`);
      setPokeList(response.data.results);
    } catch (error) {
      console.log("Erro ao buscar lista de pokemons");
      console.log(error.response);
    }
  };

  const addToPokedex = (pokemonToAdd) => {
    const isAlreadyOnPokedex = pokedex?.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    );

    if (!isAlreadyOnPokedex) {
      const newPokedex = [...pokedex, pokemonToAdd];
      setPokedex(newPokedex);
    }
  };

  const removeFromPokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
    );
    setPokedex(newPokedex);
  };

  //Criando um contexto Global:
  const context = {
    pokeList,
    pokedex,
    addToPokedex,
    removeFromPokedex,
  };
  //
  return (
    // Chamando um contexto Global:
    <GlobalContext.Provider value={context}>
      <GlobalStyle />
      <Router />
    </GlobalContext.Provider>
  );
}

export default App;
