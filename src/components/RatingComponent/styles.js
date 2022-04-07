import styled from "styled-components";

export const Container = styled.div `
    width: 530px;
    height: 310px;
    background-color: #F0EDEC;
    padding: 20px 20px;
    display: flex;
    justify-content: center;
    gap: 20px;
    vertical-align: auto;
    text-align: center;
`

export const Column = styled.div `
  display: grid;
  align-items: center;
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

export const Message = styled.p`
  color: #4A4A4A;
  text-size: 1.1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const CheckoutMore = styled.p`
  color: #4A4A4A;
`;

export const ClientName = styled.h4`
  padding-top: 15px;
`;