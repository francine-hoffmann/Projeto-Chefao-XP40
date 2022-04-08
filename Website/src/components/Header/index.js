import { Logo, Menu, Main, MenuUl, MenuLi } from "./styles";
import { Link } from "react-router-dom";

function Header() {
  return (    
    <Main>
      <Logo><img src="\images\menu.png" alt="logo" /></Logo>
      <Menu>
        <MenuUl>
          <MenuLi><Link to='/'>INÍCIO</Link></MenuLi>
          <MenuLi><Link to='sobre'>SOBRE MIM</Link></MenuLi>
          <MenuLi><Link to='produtos'>PRODUTOS</Link></MenuLi>
          <MenuLi><Link to='contato'>CONTATO</Link></MenuLi>
        </MenuUl>
      </Menu>
    </Main>
  );
}

export default Header;
