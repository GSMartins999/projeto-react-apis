import { useContext } from "react";
import { Header } from "../../components/Header/Header";
import { Card } from "../../components/PokemonCard/Card";
import { GlobalContext } from "../../contexts/GlobalContexts";
import { ContainerCard, H1} from "./styled";
import { BASE_URL } from "../../contants";

export const DetailsPage = () => {

    const {pokedex} = useContext(GlobalContext)


    return(
        <>
        <Header/>
        <ContainerCard>
        <H1>Detalhes</H1>
        {pokedex.map((pokemon) => 
        <Card
            key= {pokemon.name} pokemonsUrl={`${BASE_URL}/${pokemon.name}`}/>
        )}
        </ContainerCard>
        </>
    )

}