import styled from "styled-components";


export const Imagem = styled.img `
    background-image: url(../../assets/image/Group142.png);
    height: 500px;
    width: 1440px;
`

export const Container = styled.body`
    display: block;   
    /* background-image: url(../../assets/image/Group142.png);  */
    background-repeat: no-repeat;

`
export const Texto = styled.p `
    font-weight: 400;
    /* font-size: 20px; */
    font-size: 1.15em;
    line-height: 30px;
    margin-bottom: 4vh;
    /* line-height: 1.875em; */
`

export const Card1 = styled.div `
    margin-left: 5vw;
    margin-right: 5vw;
    margin-top: 5vh;
    /* width: 1170px; */
    width: 97,5vw;
    height: 210px;
    /* height: 17,5vh; */
    margin-top: 9vh;


    @media (max-width: 450px){
        height: fit-content;
        margin-left: 3vw;
        margin-right: 3vw;
    }
`

export const Titulo = styled.h1 `
    color: #2F5435;
    font-style: normal;
    font-weight: 500;
    /* font-size: 30px; */
    font-size: 1.875em;
    line-height: 36px;
    /* line-height: 2.25em; */

    @media (max-width: 450px) {
        text-align: center;
    }
`

export const SubTitulo = styled.h2 `
    color: #924D0D;
    font-weight: 400;
    /* font-size: 24px; */
    font-size: 1.5em;
    line-height: 29px;
`

export const Card2 = styled.div `
    display: flex;
    align-items: center;
    flex-direction: row;
    align-content: center;
    justify-content: space-around;
    /* background-color: blue; */
    margin-top: 9vh;
    margin-bottom: 9vh;

    @media (max-width: 450px){
        margin-bottom: 13vh;
        margin-left: 3vw;
        margin-right: 3vw;
        display: block;
        width: fit-content;
        height: fit-content;
    }
`

export const Card3 = styled.div `
    margin-left: 2vw;
    margin-right: 2vw;
    gap: 1vw;
    /* width: 490px; */
    width: 40vw;
    height: 150px;
    /* height: 12.25vh; */

    @media (max-width: 450px) {
        width: fit-content;
        gap: 1vw;
        width: fit-content;
        height: fit-content;
        margin-left: 3vw;
        margin-right: 3vw;
    }
`