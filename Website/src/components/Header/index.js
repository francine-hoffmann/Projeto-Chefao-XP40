import { Logo, Menu, Main, MenuUl, MenuLi } from "./styles";
import { Link } from "react-router-dom";
import MENU from '../../assets/image/MENU.png';

function Header() {
  return (    
    <Main>
      <Logo><img src={MENU} alt='Background Image' /></Logo>
      <Menu>
        <MenuUl>
          <MenuLi><Link to='/'>INÍCIO</Link></MenuLi>
          <MenuLi><Link to='sobre'>SOBRE MIM</Link></MenuLi>
          <MenuLi><Link to='produtos'>PRODUTOS</Link></MenuLi>
          <MenuLi><Link to='onde-comprar'>ONDE COMPRAR</Link></MenuLi>
          <MenuLi><Link to='contato'>CONTATO</Link></MenuLi>
        </MenuUl>
      </Menu>
    </Main>
  );
}

export default Header;
