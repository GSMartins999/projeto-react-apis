import styled from "styled-components"

export const ContainerCard = styled.div`
    background-color: #5E5E5E;
    height: auto;
    width: 100vw;
    min-height: 100vh;
    padding-top: 20px;
    padding-inline: 40px;
    gap: 10px;
`
export const H1 = styled.h1`
    color: white;
`

export const Button = styled.button`
    width: 10vw;
    height: 5vh;
    position: absolute;
    top: 7vh;
    right: 20px;
    background-color: #33A4F5;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    color: white;
    font-size: 1.1rem;
    border: none;
    cursor: pointer;
    &:hover{
        color: orange;
    }
`