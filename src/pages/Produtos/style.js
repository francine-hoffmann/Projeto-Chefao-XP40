import styled from "styled-components";

export const Titulo = styled.h1 `
    margin: 4%;
`

export const Titulo2 = styled.h2 `
    margin: 2%;
`

export const NavProdutos = styled.ul `
    color: #000;
    display: flex;
    text-align: center;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 3%;
`


export const NavLink = styled.li `
    color: #000;
    cursor: pointer;
    text-decoration: none;

    &:hover {
    text-decoration: underline ;
    }
   
`

export const Container = styled.div `
    width: 95%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 4%;
    justify-content: center;
    
    
`
export const Wrapper = styled.div `
    display: grid;
    grid-template-columns: 20% 20% 20% 20%;
    padding: 15px;
    justify-content: center;
    gap:2%;
    background-color: #F1F1F1;
`


export const Imagem = styled.img ``


export const NatugamaBox = styled.img `
    display: block;
    margin-left: auto;
    margin-right: auto;
`