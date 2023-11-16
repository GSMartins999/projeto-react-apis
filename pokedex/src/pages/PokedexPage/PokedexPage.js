import { Card } from "../../components/PokemonCard/Card";
import { Header } from "../../components/Header/Header";
import { ContainerCard, ContainerTexto, H1} from "./styled";
import { BASE_URL } from "../../contants.js"



export const PokedexPage = ({pokedex}) => {

    return(
        <>
        <Header/>
        <ContainerCard>
        <ContainerTexto>
            <H1>Meus Pokémons</H1>
        </ContainerTexto>
        </ContainerCard>
        </>

    )
}