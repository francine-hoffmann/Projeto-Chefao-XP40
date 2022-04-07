import styled from 'styled-components';

export const FooterStyled = styled.footer`
  background-color: #2f5435;
  padding: 70px 0px 20px 0px;
  color: white;
  width: 100%;

  @media (max-width: 450px) { 
     padding: 30px 0px 20px 0px;
  }

  @media(min-width: 451px) and (max-width: 1024px) { 
    padding: 30px 0px 20px 0px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  vertical-align: auto;

  @media (max-width: 450px) { 
    text-align: center;
    flex-direction: column;
    font-size: 0.8rem;
  }

  @media(min-width: 451px) and (max-width: 1024px) { 
    font-size: 0.8rem;
  }
`;

export const Info = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    gap: 5px;
    list-style: none;
  }

  @media (max-width: 450px) { 
    ul {
      flex-direction: column;
    }
  }

  @media(min-width: 451px) and (max-width: 1024px) { 
    ul {
      flex-direction: column;
    }
  }
`;

export const Social = styled.div`
  ul {
    display: flex;
    gap: 15px;
    font-size: 50px;
    list-style: none;
  }

  @media (max-width: 450px) { 
    ul {
      font-size: 40px;
      justify-content: center;
    }
  }

  @media(min-width: 451px) and (max-width: 1024px) { 
    ul {
      font-size: 40px;
      justify-content: center;
    }
  }
`;

export const Copy = styled.p`
  text-align: center; 
  @media (max-width: 450px) { 
    font-size: 0.8rem;
  }

  text-align: center; 
  @media(min-width: 451px) and (max-width: 1024px) { 
    font-size: 0.8rem;
  }
`;

export const H4Styled = styled.h4`
  @media (max-width: 450px) { 
    font-size: 1.1rem;
  }

  @media(min-width: 451px) and (max-width: 1024px) { 
    font-size: 1.1rem;
  }
`;