import { Card } from "../../components/PokemonCard/Card";
import { Header } from "../../components/Header/Header";
import { ContainerCard, ContainerTexto, Containerzao, H1 } from "./styled";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContexts";

export const ListPage = ({addToPokedex}) => {



  // Chamando nosso context Global e fazendo o map dos items
  const context = useContext(GlobalContext);
  const { pokemons, pokedex } = context;

  const filtrarPokelist = () => {
    pokemons.filter(
        (pokemonNaLista) => !pokedex.find(
            (pokemonNaPokedex) => pokemonNaLista.name === pokemonNaPokedex.name
        )
    )
  }
  
  return (
    <>
      <Header />
      <ContainerCard>
        <ContainerTexto>
          <H1>Todos Pokémons</H1>
        </ContainerTexto>
        {/* Map dos items: */}
        <Containerzao>
          {pokemons.map((pokemon) => {
            // Passando os atributos por props direito pro nosso Card:
            return (
              <Card
                key={pokemon.data.name}
                name={pokemon.data.name}
                image={pokemon.data.sprites.front_default}
                types={pokemon.data.types}
                id={pokemon.data.id}
                addToPokedex={addToPokedex}
              />
            );
          })}
        </Containerzao>
      </ContainerCard>
    </>
  );
};
