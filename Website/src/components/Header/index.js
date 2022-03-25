import { Container, Wrapper, Logo, Menu, Link } from "./styles";

function Header() {
  return (
    <Container>
      <Wrapper>
        <Logo>Logotipo</Logo>
        <Menu>
          <Link>INÍCIO</Link>
          <Link>SOBRE NÓS</Link>
          <Link>PRODUTOS</Link>
          <Link>ONDEC COMPRAR</Link>
          <Link>CONTATO</Link>
        </Menu>
      </Wrapper>
    </Container>
  );
}

export default Header;