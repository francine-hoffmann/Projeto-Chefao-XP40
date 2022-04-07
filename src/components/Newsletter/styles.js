import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 50px 8px;
`;

export const H2Title = styled.h2`
  font-weight: 450;
  font-size: 24px;
  align-items: center;
  text-align: center;
  color: #2b2b2b;

  @media(max-width: 450px){
    font-size: 18px;
  }
`;

export const H5Title = styled.h5`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  justify-content: center;
  color: #2b2b2b; 

  @media(max-width: 450px){
    padding: 0px 20px;
    align-items: center;
    text-align: center;
  }
`;

export const Formulario = styled.div`
  display: flex;
  justify-content: center;  
`;

export const FormInput = styled.input`
  width: 400px;
  border: none;
  border-radius: 10px;
  outline: none;
  background-color: #f0edec;
  border: 1px solid #fff;
  padding: 10px;
  margin-top: -15px;
  margin-bottom: 40px;  
  
  @media(max-width: 450px){
    width: 200px;
    align-items: center;
    text-align: center;
  }
`;

export const FormLabel = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  color: #2b2b2b;
`;

export const FormButton = styled.button`
  padding: 8px;
  border-radius: 20px;
  border:  2px solid #2f5435;
  background-color: #ffffff;
  cursor: pointer;
  margin: auto;
  display: flex; 
`;