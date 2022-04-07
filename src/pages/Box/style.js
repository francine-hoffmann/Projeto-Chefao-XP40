import styled from "styled-components";

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