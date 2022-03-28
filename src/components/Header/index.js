import { Container, Wrapper, Logo, Menu, Page, } from "./styles";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Container>
        <Logo>Logotipo</Logo>
        <Menu>          
          <ul class="nav justify-content-end">
            <li class="nav-item" className="item">
              <Link to='/' class="nav-link">INÍCIO</Link>
            </li>
            <li class="nav-item">
              <Link to='sobre' class="nav-link">SOBRE NÓS</Link>
            </li>
            <li class="nav-item">
              <Link to='../../pages/Produtos' class="nav-link">PRODUTOS</Link>
            </li>
            <li class="nav-item">
              <Link to='onde-comprar' class="nav-link">ONDE COMPRAR</Link>
            </li>
            <li class="nav-item">
              <Link to='contato' class="nav-link">CONTATO</Link>
            </li>
          </ul>         
        </Menu>
      </Container>
    </div>
  );
}

export default Header;
