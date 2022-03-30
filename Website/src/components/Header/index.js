import { Container, Wrapper, Logo, Menu, Page } from "./styles";
import { Link } from "react-router-dom";
import "./header.css";
import MENU from '../../assets/image/MENU.png';

function Header() {
  return (    
    <div className="main">
      <div className="logo"><img src={MENU} alt='Background Image' /></div>
      <div className="menu">
        <ul>
          <li>
          <Link to='/'>INÍCIO</Link>
          </li>
          <li>
          <Link to='sobre'>SOBRE NÓS</Link>
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
      </div>
    </div>
  );
}

export default Header;
