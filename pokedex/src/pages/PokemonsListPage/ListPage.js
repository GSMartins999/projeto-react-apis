import { Card } from "../../components/PokemonCard/Card";
import { Header } from "../../components/Header/Header";
import { ContainerCard, H1} from "./styled";

export const ListPage = () => {

    return(
        <>
        <Header/>
        <ContainerCard>
        <H1>Todos os Pokémons</H1>
            <Card/>
        </ContainerCard>
        </>

    )
}