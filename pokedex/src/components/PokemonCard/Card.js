import { useLocation, useNavigate } from "react-router-dom";
import {
  Capturar,
  Container,
  ContainerAtri,
  ContainerAtriImg,
  ContainerAtributos,
  ContainerBotoes,
  ContainerImg,
  ContainerTipos,
  Conteudo,
  Detalhes,
  ImgPokemons,
  Pokebola,
  Tipo,
} from "./styled";
import { goToDetalhes } from "../../Router/cordinator";
import { GlobalContext } from "../../contexts/GlobalContexts";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import pokebola from "../../img/pokebola2.png"



export const Card = ({ pokemonsUrl }) => {
  const [pokemon, setPokemon] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const context = useContext(GlobalContext);
  const { addToPokedex, removeFromPokedex } = context;

  const getAtributos = async () => {
    try {
      const response = await axios.get(pokemonsUrl);
      setPokemon(response.data);
    } catch (error) {
      console.log('Error', error.response);
    }
  }

  useEffect(() => {
    getAtributos();
  }, []);

  const type = pokemon.types;

  //Função para mostrar os tipos e os fundos alternativos:
  const tipos = () => {
    if (pokemon.types && pokemon.types.length >= 2) {
        return <div><Tipo type={type[0].type.name}><img src={pokebola} height="10px"/>{capitalizarPrimeiraLetra(type[0].type.name)}</Tipo><Tipo type={type[1].type.name}><img src={pokebola} height="10px"/>{capitalizarPrimeiraLetra(type[1].type.name)}</Tipo></div>
    } else if (pokemon.types && pokemon.types.length === 1) {
        return <Tipo type={pokemon.types[0].type.name}><img src={pokebola} height="10px"/>{capitalizarPrimeiraLetra(type[0].type.name)}</Tipo>
    } else {
        return "Tipo não especificado"; // ou qualquer valor padrão desejado
    }
    }

    //Função para deixar a primeira letra maiuscula:
    const capitalizarPrimeiraLetra = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };

  return (
    <>
      <Container>
        <Conteudo type={type && type.length > 0 ? type[0].type.name : "Tipo não especificado"}>
          <ContainerAtriImg>
            <ContainerAtri>
              <ContainerAtributos>
                #{pokemon.id}
                <strong>{capitalizarPrimeiraLetra(pokemon.name || "")}</strong>
              </ContainerAtributos>
              <ContainerTipos>
                <Tipo>{tipos(type)}
                </Tipo> 
              </ContainerTipos>
            </ContainerAtri>
            <ContainerImg>
              <ImgPokemons src={pokemon.sprites?.other["official-artwork"].front_default} alt={pokemon.name} />
            </ContainerImg>
          </ContainerAtriImg>
          <ContainerBotoes>
            {location.pathname === "/" || location.pathname === "/pokedex" ? (
              <Detalhes onClick={() => goToDetalhes(navigate)}>
                <strong>Detalhes</strong>
              </Detalhes>
            ) : (
              ""
            )}
            {location.pathname === "/" ? <Capturar onClick={() => addToPokedex(pokemon)}>Capturar</Capturar> : ""}
            {location.pathname === "/pokedex" ? <button onClick={() => removeFromPokedex(pokemon)}>Excluir</button> : ""}
            {location.pathname === "/detalhes" ? "" : ""}
          </ContainerBotoes>
        </Conteudo>
      </Container>
    </>
  );
};

  
