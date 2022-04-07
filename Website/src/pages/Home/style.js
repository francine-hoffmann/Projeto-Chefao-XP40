import styled from "styled-components";

export const Title = styled.h2 `
    margin-left: 40px;
    padding: 50px 200px;
    color: #2F5435;
    font-size: 30px;

    @media(max-width: 450px){
        padding: 50px 0px;
        text-align: center;
        margin: 0px;
    }

    @media(min-width: 451px) and (max-width: 1024px){
        padding: 50px 0px;
        text-align: center;
        margin: 0px;
    }
`

export const Wrapper = styled.div `
    display: grid;
    grid-template-columns: 33.33% 33.33% 33.33%;
    grid-gap: 50px 0px;
    padding: 0 300px;
    padding-bottom: 50px;

    @media(max-width: 450px){
        padding: 0px 20px;
        grid-template-columns: 100%;
        grid-gap: 10px 0px;
    }

    @media(min-width: 451px) and (max-width: 1024px){
        padding: 0px 20px;
        grid-gap: 10px 0px;
    }
`

export const ContainerSeals = styled.div `
    display: grid;
    grid-template-columns: 33.33% 33.33% 33.33%;
    padding: 20px 300px;
    background-color: #F1F1F1;

    @media(max-width: 450px){
        padding: 20px 20px;
        grid-template-columns: 100%;
        grid-gap: 30px 0px;
    }

    @media(min-width: 451px) and (max-width: 1024px){
        padding: 20px 100px;
        grid-gap: 30px 0px;
    }
`

export const NatugamaBox = styled.img `
    display: block;
    margin-left: auto;
    margin-right: auto;
`