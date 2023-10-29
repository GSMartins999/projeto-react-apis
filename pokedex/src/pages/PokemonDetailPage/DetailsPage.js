import { Header } from "../../components/Header/Header";
import { Card } from "../../components/PokemonCard/Card";
import { ContainerCard, H1} from "./styled";

export const DetailsPage = () => {

    return(
        <>
        <Header/>
        <ContainerCard>
        <H1>Detalhes</H1>
        </ContainerCard>
        </>
    )

}