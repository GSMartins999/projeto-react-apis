import { useLocation, useNavigate } from "react-router-dom";
import { Capturar, Container, ContainerBotoes, Containerzao, Conteudo, Detalhes } from "./styled";
import { goToDetalhes } from "../../Router/cordinator";


// Recebendo nossas props:
export const Card = ({name}) => {
  //Chamando nossas rotas: 
  const navigate = useNavigate();
  const location = useLocation();


  return (
    <>
    <Container>
    <Conteudo>
      {/* Recebendo nossos atributos por props */}
     <p>{name}</p>
     <img src={""}/>



     <ContainerBotoes>
    {/* Organizando qual botão mostrar na tela: */}
      {location.pathname === "/" || location.pathname === "/pokedex" ? (
       <Detalhes onClick={() => goToDetalhes(navigate)}><strong>Detalhes</strong></Detalhes>
      ) : (
        ""
      )}
      {location.pathname === "/" ? <Capturar>Capturar</Capturar>: ""}
      {location.pathname === "/pokedex" ? <button>Excluir</button> : ""}
      {location.pathname === "/detalhes" ? "" : ""}
      </ContainerBotoes>
      </Conteudo>
    </Container>
    </>
  );
};