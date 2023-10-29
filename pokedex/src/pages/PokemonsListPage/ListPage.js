import { Card } from "../../components/PokemonCard/Card";
import { Header } from "../../components/Header/Header";
import { ContainerCard, ContainerTexto, Containerzao, H1} from "./styled";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContexts";

export const ListPage = () => {

    // Chamando nosso context Global e fazendo o map dos items
    const context = useContext(GlobalContext)
    const { pokemons } = context

    return(
        <>
        <Header/>
        <ContainerCard>
        <ContainerTexto>
        <H1>Todos Pokémons</H1>
        </ContainerTexto>
        {/* Map dos items: */}
        <Containerzao> 
        {
            pokemons.map((pokemon) => {
                // Passando os atributos por props direito pro nosso Card: 
                return <Card key={pokemon.name} name={pokemon.name} pokemonUrl={pokemon.url} type={pokemon.type}/>
            })
        }
        </Containerzao>
        </ContainerCard>
        </>

    )
}