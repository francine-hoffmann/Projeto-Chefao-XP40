import styled from 'styled-components';

export const Container = styled.header`
    background: black;
    height: 12vh;
    display: flex;
    width: fit-content;
`;

export const Wrapper = styled.div`
  position: fixed;
  background: black;
  max-width: 1140px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const Logo = styled.h1`
  color: #65e369;
  margin-right: 44vw;
  justify-content: flex-start;
  margin-left: 1vw;
`;
export const Menu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const Page = styled.a`
  color: #65e369;
  text-decoration: none;
`;