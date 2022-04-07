import { Logo, Menu, Main } from "./styles";
import { Link } from "react-router-dom";
import "./header.css";
import MENU from '../../assets/image/MENU.png';

function Header() {
  return (    
    <Main>
      <Logo><img src={MENU} alt='Background Image' /></Logo>
      <Menu>
        <ul>
          <li>
          <Link to='/'>INÍCIO</Link>
          </li>
          <li>
          <Link to='sobre'>SOBRE MIM</Link>
          </li>
          <li>
          <Link to='produtos'>PRODUTOS</Link>
          </li>
          <li>
          <Link to='onde-comprar'>ONDE COMPRAR</Link></li>
          <li>
          <Link to='contato'>CONTATO</Link>
          </li>
        </ul>
      </Menu>
    </Main>
  );
}

export default Header;
