import styled from "styled-components";

export const Titulo = styled.h1 `
    margin: 40px;
`

export const Titulo2 = styled.h2 `
    margin: 20px;
`

export const NavProdutos = styled.ul `
    color: #000;
    display: flex;
    text-align: center;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    list-style-type: none;
    gap: 10px;
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
    gap: 40px;
    justify-content: center;
`
export const Wrapper = styled.div `
    display: grid;
    grid-template-columns: 20% 20% 20% 20%;
    padding: 15px;
    justify-content: center;
    gap:20px;
`

export const NatugamaBox = styled.img `
    display: block;
    margin-left: auto;
    margin-right: auto;
`

export const Button = styled.button`
  padding: 8px 15px;
  border-radius: 20px;
  border:  2px solid #2f5435;
  background-color: #ffffff;
  cursor: pointer;
  margin: auto;
  display: flex; 
`;