import styled from 'styled-components';

export const Main = styled.div`
   display: flex;
    justify-content: space-between;
    background: rgba(0,0,0,0.15);
    height: fit-content;
    /* background-color: green; */
    align-items: center;
    padding-top: 4vh;
    padding-bottom: 1vh;
    position: absolute;
    width: 100%;
    z-index: 100;

    @media (max-width: 450px) {

    height: auto;
    justify-content: space-between;
   }
`;


export const Logo = styled.div`
  margin-left: 2vw;
  padding-bottom: 2vh;

`;
export const Menu = styled.div`
   display: flex;
   align-items: center;

   @media (max-width: 450px) {
    
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        margin-left: 50px;
        width: 1000px;
    
   }
`;

export const MenuUl = styled.ul`
    display: flex;
    gap: 2vw;
    margin-right: 2vw;
    align-items: center;


`;