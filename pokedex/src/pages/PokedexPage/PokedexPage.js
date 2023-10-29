import { Card } from "../../components/PokemonCard/Card";
import { Header } from "../../components/Header/Header";
import { ContainerCard, H1} from "./styled";



export const PokedexPage = () => {

    return(
        <>
        <Header/>
        <ContainerCard>
        <H1>Meus Pokémons</H1>
            <Card/>
        </ContainerCard>
        </>

    )
}