import { Link } from 'react-router-dom';
import React from 'react';

import { Titulo, NavProdutos, NavLink, Wrapper, Container, Titulo2, Button, NatugamaBox} from './style.js'
import BallComponent from "../../components/BallComponent";

function Produtos (){
    
    var header = document.getElementById("header");
    if(header){
      header.classList.remove("solidBackground");
    }
    const [products, setProdutos ] = React.useState(null);

    const buscarProdutos = (categoria) => {
        
        if (categoria != 0) {
            fetch("/produtos/categoria/" + categoria)
            .then((res) => res.json())
            .then((data) => setProdutos(data));
        }
        else {
            fetch("/produtos")
            .then((res) => res.json())
            .then((data) => setProdutos(data));
        }
    };
    React.useEffect(() => {
        buscarProdutos(0);
    }, []);

    const [categories, setCategorias ] = React.useState(null);
    React.useEffect(() => {
        fetch("/categorias")
            .then((res) => res.json())
            .then((data) => setCategorias(data));

    }, []);


    return(
        <main> 
            <img src="\images\produtos.png" />

            <Titulo> Produtos </Titulo>

            <NavProdutos>
                <Link to="" onClick={(e) => buscarProdutos(0)} ><NavLink>todos</NavLink></Link>
                {!categories? "Carregando categorias..." : categories.map((categorie, index) => 
                    <Link to="" onClick={(e) => buscarProdutos(categorie.id)} ><NavLink>{categorie.nome}</NavLink></Link>
                )}
            </NavProdutos>

            <Wrapper>
                {!products ? "Carregando produtos..." : products.map((product, index) => {
                        let link = "/detalhes-produtos?idProduto=" + product.id;
                        return <div>
                            <BallComponent image={product.link_imagem} label={product.nome} size="medium" key={product.id}/>
                            <Link to={link}><Button>Saiba Mais &gt;</Button></Link>
                        </div>
                    }
                )}
            </Wrapper>

            <Link to="/Box"><NatugamaBox src="\images\natugama-box.jpg"></NatugamaBox></Link>
            <Container>
                    <Titulo2> Veja o que nosso clientes estão dizendo: </Titulo2>
            </Container>
        </main>
    )
}

export default Produtos