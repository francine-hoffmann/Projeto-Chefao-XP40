import styled from "styled-components";

export const Container = styled.div `
    padding: 100px 100px;
    display: grid;
    grid-template-columns:50% 50%;
    justify-content: center;

    @media(max-width: 450px){
        
    }

    @media(min-width: 451px) and (max-width: 1024px){
        
    }
`

export const Column = styled.div `
  display: grid;
  align-items: center;

  @media(max-width: 450px){
        display: flex;
        flex-direction: column;
        margin-top: 10vh;
    }

    @media(min-width: 451px) and (max-width: 1024px){
        
    }
`
export const Figure = styled.div `

@media(max-width: 450px){
       margin-top: 70vh;
       margin-left: -40vw;
    }

`

export const ContainerSeals = styled.div `
    display: grid;
    grid-template-columns: 33.33% 33.33% 33.33%;

    
`

export const ContainerPassos = styled.div `
    display: grid;
    grid-template-columns: 33.33% 33.33% 33.33%;
    gap: 30px;
    padding-top: 50px;

    @media(max-width: 450px){
        display: none;
    }

    @media(min-width: 451px) and (max-width: 1024px){
        margin-left: -7vw;
    }
`

export const ContainerComoUsar = styled.div `
    padding: 70px 100px;

    @media(max-width: 450px){
        /* margin-top: -40vh;
        margin-left: -10vw; */
        display: none;
    }

    @media(min-width: 451px) and (max-width: 1024px){
        margin-top: -35vh;
    }
`

export const ContainerAvaliacoes = styled.div `
    padding: 70px 100px;

    @media(max-width: 450px){
        display: none;
    }
`

export const Imagem = styled.img `
    width: 550px;
    height: 550px;

    @media(max-width: 450px){
        width: 200px;
        height: 200px;
    }

    @media(min-width: 451px) and (max-width: 1024px){
        width: 300px;
        height: 300px;
    }
`

export const Item = styled.div `
    display: flex;
`

