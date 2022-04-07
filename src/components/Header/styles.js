import styled from 'styled-components';

export const Main = styled.div`
   display: flex;
   justify-content: space-between;
   background: rgba(0,0,0,0.15);
   height: fit-content;
   align-items: center;
   padding-top: 1vh;
   position: absolute;
   width: 100%;
   z-index: 100;

   @media (max-width: 450px) {
      height: auto;
      justify-content: space-between;
      padding: 5px 20px;
   }
`;

export const Logo = styled.div`
   margin-left: 2vw;
   padding-bottom: 2vh;

   @media (max-width: 450px) {
      padding-bottom: initial;
   }
}

`;
export const Menu = styled.div`
   display: flex;
   align-items: center;


`;

export const MenuUl = styled.ul`
   display: flex;
   gap: 2vw;
   margin-right: 2vw;

   @media(max-width: 450px) {
      display: inline-block;
      flex-direction: row;
      text-align: center;
   }
`;

export const MenuLi = styled.ul`
   text-decoration: none;

   a:hover {
      color: #FFF
   }
`;

