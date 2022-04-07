import styled from "styled-components";

export const Small = styled.img `
    border-radius: 100%;
    width: 150px;
    height: 150px;
    display: block;
    margin-left: auto;
    margin-right: auto;

    @media(max-width: 450px){
        width: 100px;
        height: 100px;
    }
`

export const Medium = styled.img `
    border-radius: 100%;
    width: 250px;
    height: 250px;
    display: block;
    margin-left: auto;
    margin-right: auto;

    @media(max-width: 450px){
        width: 150px;
        height: 150px;
    }
`

export const Large = styled.img `
    border-radius: 100%;
    width: 350px;
    height: 350px;
    display: block;
    margin-left: auto;
    margin-right: auto;    
    
    @media(max-width: 450px){
        width: 250px;
        height: 250px;
    }
`

export const Label = styled.h3 `
    font-size: 16px;
    margin-top: 20px;
    text-align: center;
    color: #000;

    @media(max-width: 450px){
        margin-top: 1vh;
    }
`