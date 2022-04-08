import { Link } from 'react-router-dom';


import React from 'react';
import bannerProduto from '../../assets/image/produtos.png'

import { Titulo, NavProdutos, NavLink, Wrapper, Container, Titulo2, Imagem} from './style.js'
import BallComponent from "../../components/BallComponent";

function Produtos (){
    const [products, setProdutos ] = React.useState(null);

    React.useEffect(() => {
        fetch("/produtos")
            .then((res) => res.json())
            .then((data) => setProdutos(data));

    }, []);


    return(
        <main> 
            <Imagem src={bannerProduto} />

            <Titulo> Produtos </Titulo>

            <NavProdutos>
                
                <Link to=""><NavLink>todos</NavLink></Link>
                <Link to=""><NavLink>aromatizantes</NavLink></Link>
                <Link to=""><NavLink>cabelo</NavLink></Link>
                <Link to=""><NavLink>corpo & banho</NavLink></Link>
                <Link to=""><NavLink>maquiagem</NavLink></Link> 
                <Link to=""><NavLink>perfume</NavLink></Link>
                <Link to=""><NavLink>rosto</NavLink></Link>
                <Link to=""><NavLink>vegano</NavLink></Link>
        
            </NavProdutos>

            <Wrapper>
                {!products ? "Carregando produtos..." : products.map((product, index) => 
                    <BallComponent image={product.link_imagem} label={product.nome} size="medium" key={product.id}/>
                )}
            </Wrapper>

            <img src="\images\natugamabox.png"></img>
            <Container>
                    <Titulo2> Veja o que nosso clientes estão dizendo: </Titulo2>


            </Container>
        </main>
    )
}

export default Produtos