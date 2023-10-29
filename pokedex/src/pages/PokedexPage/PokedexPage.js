import { Card } from "../../components/PokemonCard/Card";
import { Header } from "../../components/Header/Header";
import { ContainerCard, ContainerTexto, H1} from "./styled";



export const PokedexPage = () => {

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