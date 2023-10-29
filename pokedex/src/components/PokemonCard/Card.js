import { useLocation, useNavigate } from "react-router-dom"
import { Container, Conteudo } from "./styled"
import { goToDetalhes } from "../../Router/cordinator"

export const Card = () => {
    const navigate = useNavigate()
    const location = useLocation()
    return( 
            <Container>
                <Conteudo>
                    <p>O Carai</p>
                </Conteudo>
            {
                location.pathname === "/" || location.pathname === "/pokedex"? (
                    <button onClick={() => goToDetalhes(navigate)}>Detalhes</button>

                ) : ( 
                    ("")
                )
            }
            {
                location.pathname === "/" ? (
                    <button>Capturar</button>
                ) : (
                    ("")
                )
            }
            {
                location.pathname === "/pokedex" ? (
                    <button>Excluir</button>
                ) : (
                    ("")
                )
            }
            {
                location.pathname === "/detalhes" ? (
                     ("")
                ) : (
                    ("")
                )
            }


            </Container>
    )
}


// {location.pathname === "/" ? (
//     <button>
//       Adicionar à Pokedex
//     </button>
//   ) : (
//     <button>
//       Remover da Pokedex
//     </button>
//   )}