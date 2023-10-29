import styled from "styled-components";

export const Container = styled.div`
    width: 420px;
    height: 263px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: end;
    padding: 10px;
    flex-direction: column;
    flex-wrap: wrap;
`

export const Conteudo = styled.div`
    width: 100%;
    height: 210px;
    background-color: blue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* padding: 5px; */
`




export const Detalhes = styled.p`
    color: white;
    border-bottom: solid white 2px;
    width: 5vw;
    text-align: center;
    height: 3vh;
`

export const Capturar = styled.button`
    background-color: white;
    width: 7vw;
    text-align: center;
    height: 5vh;
    border-radius: 10px;
    border: none;
`
export const ContainerBotoes = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    margin-top: 80px;
    border: solid black 2px;
    
`
