import styled from "styled-components";


export const Container = styled.main `
    display: flex;
    flex-direction: column;

`
export const Menu1 = styled.h2 `
    display: flex;
    justify-content: center;
    margin-bottom: 16vh;

    @media(max-width: 450px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        margin: 0px;
    }
`

export const Imagem = styled.img `

    @media (max-width: 450px) {
        display: none;
    }
`

export const Imagem2= styled.img `
        display: none;

    @media (max-width: 450px) {
        visibility: visible;
    }
`

export const ComoFunciona = styled.div `
    margin-top: 11vh;
    margin-left: 10vw;
    margin-bottom: 6vh;
`

export const Stamp = styled.div`
    font-size: 3vh;
    padding: 3%;
    width: 30%;

    @media (max-width: 450px) {
        padding:1%;
        width: 70%;
        font-size: 2vh;
        text-align: center;
        align-items: center;
        justify-content: center;
    }
`

export const SubTitulo = styled.h3 `
    margin-left: 10vw;
    margin-bottom: -4vh;
    font-size: 24px;
    font-weight: 400;
    font-family: 'Poppins';
`


export const Texto = styled.p `
    margin-left: 1vw;
    text-align: center;
` 

export const OqueVem = styled.div `
    margin-left: 8vw;
    margin-bottom: 6vh;
`



export const Stamp2 = styled.div ``

 export const Menu2 = styled.div `
    display: flex;
    justify-content: center;
    gap: 5vw;
    margin-bottom: 12vh;

    @media(max-width: 450px){
        display: flex;
        flex-direction: column;
        align-items: center;

    }
`