import { useContext } from "react";
import { Header } from "../../components/Header/Header";
import { Card } from "../../components/PokemonCard/Card";
import { GlobalContext } from "../../contexts/GlobalContexts";
import {
  ContainerAtri,
  ContainerBaseStats,
  ContainerCard,
  ContainerImgs,
  ContainerMovimentos,
  ContainerPokeMove,
  ContainerPokemon,
  H1,
  Img1,
  Img2,
  Moves,
  Pokemon,
  Stats,
} from "./styled";
import { BASE_URL } from "../../contants";

export const DetailsPage = () => {
  const { pokedex } = useContext(GlobalContext);

  return (
    <>
    <Header/>
    <ContainerCard>
    <div>
        <H1>Meus Pokémons</H1>
    </div>
    <div>
    {pokedex.map((pokemon) => 
    <Card
        key= {pokemon.name} pokemonsUrl={`${BASE_URL}/${pokemon.name}`}/>
    )}
    </div>
    </ContainerCard>
    </>

  );
};
