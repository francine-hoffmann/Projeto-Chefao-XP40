import styled from "styled-components";

export const Container = styled.div`
    display:  flex;
    flex-direction: row;
    width: 100%;
    padding: 0px 100px;

    @media(max-width: 450px){
        padding: 0px 10vw;
    }
`
export const Item = styled.div `
    display: flex;
`

