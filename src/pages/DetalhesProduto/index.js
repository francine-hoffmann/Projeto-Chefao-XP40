import { Link, useSearchParams } from 'react-router-dom';
import React from 'react';
import { Container, Column, ContainerSeals, ContainerPassos, ContainerComoUsar, ContainerAvaliacoes, Imagem, Item } from './style.js'
import BallComponent from "../../components/BallComponent";
import RatingComponent from "../../components/RatingComponent";
import Carousel from "react-elastic-carousel";
import "./style.css";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 2 }
];

function DetalhesProduto() {
    var header = document.getElementById("header");
    if(header){
        header.classList.add("solidBackground");
    }

    const [searchParams, setSearchParams] = useSearchParams();

    const carouselRef = React.useRef(null);
    let resetTimeout;

    const [avaliacoes, setAvaliacoes] = React.useState(null);

    React.useEffect(() => {
        fetch("/avaliacao/produto/" + searchParams.get("idProduto"))
            .then((res) => res.json())
            .then((data) => setAvaliacoes(data));
    }, [searchParams]);

    const [produto, setProduto] = React.useState(null);
    React.useEffect(() => {
        fetch("/produtos/" + searchParams.get("idProduto"))
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProduto(data)
            });
    }, [searchParams]);

    if (produto) {
        return (
            <div>
                <Container>
                    <Column>
                        <Imagem src={produto.link_imagem}></Imagem>
                    </Column>
                    <Column>
                        <div>
                            <h1>{produto.nome}</h1>
                            <h2>Descrição</h2>
                            <p>{produto.descricao}</p>
                            <h2>Composição</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie in nunc molestie ornare donec molestie praesent. Volutpat elementum ullamcorper felis.</p>
                            <ContainerSeals>
                                <BallComponent image="\images\nao-testado.png" size="small" />
                                <BallComponent image="\images\natural.png" size="small" />
                                <BallComponent image="\images\ecol-correto.png" size="small" />
                            </ContainerSeals>
                        </div>
                    </Column>
                </Container>
                <ContainerComoUsar>
                    <img src="\images\como_usar.png"></img>
                    <ContainerPassos>
                        <BallComponent image="\images\1_passo.png" label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie in nunc molestie." size="large" />
                        <BallComponent image="\images\2_passo.png" label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie in nunc molestie." size="large" />
                        <BallComponent image="\images\3_passo.png" label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie in nunc molestie." size="large" />
                    </ContainerPassos>
                </ContainerComoUsar>
                {!avaliacoes || avaliacoes.length <= 0 ? <div></div> :
                    <ContainerAvaliacoes>
                        <h1>VEJAM O QUE NOSSOS CLIENTES ESTÃO DIZENDO:</h1>
                        <Carousel breakPoints={breakPoints} itemsToShow={2} enableAutoPlay ref={carouselRef} onNextEnd={({ index }) => {
                            clearTimeout(resetTimeout);
                            if (index === avaliacoes.length - 2) {
                                resetTimeout = setTimeout(() => {
                                    carouselRef.current.goTo(0)
                                }, 2000) // same time
                            }
                        }}>
                            {!avaliacoes ? <div>"Carregando avaliações..."</div> : avaliacoes.map((avaliacao, index) =>
                                <Item><RatingComponent rating={5} productName={avaliacao.Produto.nome} productImage={avaliacao.Produto.link_imagem} clientName={avaliacao.nome} message={avaliacao.mensagem} key={avaliacao.id} /></Item>
                            )}
                        </Carousel>
                    </ContainerAvaliacoes>
                }
            </div>
        )
    } else {
        return (<div>Carregando produto...</div>)
    }
}

export default DetalhesProduto