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
  Pokebola,
} from "./styled";
import { goToDetalhes } from "../../Router/cordinator";
import { GlobalContext } from "../../contexts/GlobalContexts";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import pokebola from "../../img/pokebola2.png"


// Recebendo nossas props:
export const Card = ({ pokemonsUrl }) => {



  const [pokemon, setPokemon ] = useState({});
  //Chamando nossas rotas:
  const navigate = useNavigate();
  const location = useLocation();


  const context = useContext(GlobalContext);
  const { addToPokedex, removeFromPokedex } = context;


  const getAtributos = async () =>{
    try{
      const response = await axios.get(pokemonsUrl);
      setPokemon(response.data)      
    } catch(error){
      console.log('Error', error.response);
    }
  }

  //Renderizar na tela
  useEffect(()=>{
    getAtributos();
  }, [])


  const type = pokemon.types && pokemon.types[0].type.name

  return (
    <>
      <Container>
        <Conteudo>
          <ContainerAtriImg>
            
            {/* Recebendo nossos atributos por props */}
            <ContainerTextoAndTypes>
              <p>
                <strong>#{pokemon.id}</strong>
              </p>
              <p>
                <strong>{pokemon.name}</strong>
              </p>
              <ContainerTypes>
              {type}
              </ContainerTypes>
            </ContainerTextoAndTypes>
            <ContainerImg>
              <ImgPokemons src={pokemon.sprites?.other["official-artwork"].front_default} alt={pokemon.name} />
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
            {location.pathname === "/" ? <Capturar onClick={()=>addToPokedex(pokemon)}>Capturar</Capturar> : ""}
            {location.pathname === "/pokedex" ? <button onClick={()=>removeFromPokedex(pokemon)}>Excluir</button> : ""}
            {location.pathname === "/detalhes" ? "" : ""}
          </ContainerBotoes>
        </Conteudo>
      </Container>
    </>
  );
};
