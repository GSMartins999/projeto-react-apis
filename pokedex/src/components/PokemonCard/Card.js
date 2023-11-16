import { useLocation, useNavigate } from "react-router-dom";
import {
  Capturar,
  Container,
  ContainerAtriImg,
  ContainerBotoes,
  ContainerImg,
  ContainerTextoAndTypes,
  ContainerTypes,
  Conteudo,
  Detalhes,
  ImgPokemons,
} from "./styled";
import { goToDetalhes } from "../../Router/cordinator";
import { GlobalContext } from "../../contexts/GlobalContexts";
import { useContext } from "react";

// Recebendo nossas props:
export const Card = ({ name, image, types, id, addToPokedex }) => {
  //Chamando nossas rotas:
  const navigate = useNavigate();
  const location = useLocation();


  const context = useContext(GlobalContext);
  const { pokemons } = context;

  const typeHandler = () => {
    if (types[1]) {
      return types[0].type.name + " | " + types[1].type.name;
    }
    return types[0].type.name;
  };

  return (
    <>
      <Container>
        <Conteudo>
          <ContainerAtriImg>
            {/* Recebendo nossos atributos por props */}
            <ContainerTextoAndTypes>
              <p>
                <strong>#{id}</strong>
              </p>
              <p>
                <strong>{name}</strong>
              </p>
              <ContainerTypes>
                {typeHandler(types)}
              </ContainerTypes>
            </ContainerTextoAndTypes>
            <ContainerImg>
              <ImgPokemons src={image} alt={name} />
            </ContainerImg>
          </ContainerAtriImg>
          <ContainerBotoes>
            {/* Organizando qual botão mostrar na tela: */}
            {location.pathname === "/" || location.pathname === "/pokedex" ? (
              <Detalhes onClick={() => goToDetalhes(navigate)}>
                <strong>Detalhes</strong>
              </Detalhes>
            ) : (
              ""
            )}
            {location.pathname === "/" ? <Capturar onClick={() => addToPokedex(pokemons)}>Capturar</Capturar> : ""}
            {location.pathname === "/pokedex" ? <button>Excluir</button> : ""}
            {location.pathname === "/detalhes" ? "" : ""}
          </ContainerBotoes>
        </Conteudo>
      </Container>
    </>
  );
};
