import { Card } from "../../components/PokemonCard/Card";
import { Header } from "../../components/Header/Header";
import { ContainerCard, ContainerTexto, H1} from "./styled";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContexts";
import { BASE_URL } from "../../contants";



export const PokedexPage = () => {

    const {pokedex} = useContext(GlobalContext)

    return(
        <>
        <Header/>
        <ContainerCard>
        <ContainerTexto>
            <H1>Meus Pokémons</H1>
        </ContainerTexto>
        {pokedex.map((pokemon) => 
        <Card
            key= {pokemon.name} pokemonsUrl={`${BASE_URL}/${pokemon.name}`}/>
        )}
        </ContainerCard>
        </>

    )
}