import { Card } from "../../components/PokemonCard/Card";
import { Header } from "../../components/Header/Header";
import { ContainerCard, ContainerTexto, Containerzao, H1 } from "./styled";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContexts";

export const ListPage = () => {



  // Chamando nosso context Global e fazendo o map dos items
  const context = useContext(GlobalContext);
  const { pokeList, pokedex } = context;
  
  const filteredPokeList = () =>
    pokeList.filter(
      (pokemonInList) => !pokedex.find((pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
        )
    );

    console.log(pokeList);


    console.log("sasas",pokedex);


  return (
    <>
      <Header />
      <ContainerCard>
        <ContainerTexto>
          <H1>Todos Pokémons</H1>
        </ContainerTexto>
        {/* Map dos items: */}
        <Containerzao>
        {filteredPokeList().map((pokemon)=>{
            return <Card key={pokemon.url} pokemonsUrl={pokemon.url} pokemons={pokemon}/>
          })}
        </Containerzao>
      </ContainerCard>
    </>
  );
};