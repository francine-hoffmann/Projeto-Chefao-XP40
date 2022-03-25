import styled from 'styled-components';

export const Container = styled.header`
    background-color: #49065e;
    height: 12vh;
`;

export const Wrapper = styled.div`
  position: fixed;
  background: transparent;
  max-width: 1140px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const Logo = styled.h1`
  color: #fff;
`;
export const Menu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const Link = styled.a`
  color: #fff;
  text-decoration: none;
`;