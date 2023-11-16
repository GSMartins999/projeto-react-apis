import styled from "styled-components";

export const Container = styled.div`
    width: 500px;
    min-width: 350px;
    height: 300px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
`

export const Conteudo = styled.div`
    width: 400px;
    height: 280px;
    background-color: blue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: solid pink 5px;
`

export const Detalhes = styled.p`
    color: white;
    border-bottom: solid white 2px;
    width: 15%;
    text-align: center;
    height: 3vh;
    border: solid orange 5px;
    cursor: pointer;

`

export const Capturar = styled.button`
    background-color: white;
    width: 20%;
    text-align: center;
    height: 5vh;
    border-radius: 10px;
    border: none;
    border: solid red 5px;
    cursor: pointer;

`
export const ContainerBotoes = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    border: solid black 2px;
    
`
export const ContainerImg = styled.div`
    width: 193px;
    height: 193px;
    display: flex;
    justify-content: start;
    align-items: center;
    border: solid pink 5px;

`

export const ImgPokemons = styled.img`
    width: 100%;
    height: 100%;
    border: solid red 5px;


`
export const ContainerTextoAndTypes = styled.div`
    width: 40%;
    height: 150px;
    display: flex;
    justify-content: left;
    flex-direction: column;
    left: 0;
    border: solid pink 2px;
    padding: 5px;
    color: white;

`

export const Type = styled.div`
    width: 45%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #70B873;
    border-radius: 10px;
`
export const ContainerTypes = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 60%;
    gap: 3px;
    width: 100%;
    margin-bottom: 3px;
`


export const ContainerAtriImg = styled.div`
    justify-content: space-around;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: solid black 2px;
    width: 100%;
`
