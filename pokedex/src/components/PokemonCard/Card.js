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
  Type,
} from "./styled";
import { goToDetalhes } from "../../Router/cordinator";
import axios from "axios";
import { useEffect, useState } from "react";

// Recebendo nossas props:
export const Card = ({ url }) => {
  //Chamando nossas rotas:
  const navigate = useNavigate();
  const location = useLocation();

  const [pokemon, setPokemon] = useState([]);
  const [tipo, setTipo] = useState([]);

  const getAtributos = async () => {
    try {
      const response = await axios.get(url);
      setPokemon(response.data);
    } catch (error) {
      console.log("Erro ao buscar lista de pokemons");
      console.log(error);
    }
  };

  useEffect(() => {
    getAtributos();
  }, []);

  const getType = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/egg-group/1");
      setTipo(response.data);
    } catch (error) {
      console.log("Erro ao buscar lista de pokemons");
      console.log(error);
    }
  };

  useEffect(() => {
    getType();
  }, []);

  return (
    <>
      <Container>
        <Conteudo>
          <ContainerAtriImg>
          {/* Recebendo nossos atributos por props */}
          <ContainerTextoAndTypes>
          <p><strong>#{pokemon.name}</strong></p>
            <p><strong>{pokemon.name}</strong></p>
            <ContainerTypes>
            <Type>{tipo.name}</Type>
            <Type>{tipo.name}</Type>
            <Type>{tipo.name}</Type>
            </ContainerTypes>
          </ContainerTextoAndTypes>
          <ContainerImg>
            <ImgPokemons
              src={pokemon.sprites?.front_default}
              alt={pokemon.name}
            />
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
            {location.pathname === "/" ? <Capturar>Capturar</Capturar> : ""}
            {location.pathname === "/pokedex" ? <button>Excluir</button> : ""}
            {location.pathname === "/detalhes" ? "" : ""}
          </ContainerBotoes>
        </Conteudo>
      </Container>
    </>
  );
};
