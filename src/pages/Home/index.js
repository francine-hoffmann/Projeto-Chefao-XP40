
import ProductCarousel from "../../components/ProductCarousel";
import imgHeader from  "../../assets/image/header.jpg";
import Newsletter from "../../components/Newsletter";

import { Title, Wrapper } from './style';
import BallComponent from "../../components/BallComponent";

import React from "react";

function Home (){
    const images = {
        aromatherapy: require('../../assets/image/categories/aromatherapy.png'),
        body: require('../../assets/image/categories/body.png'),
        face: require('../../assets/image/categories/face.png'),
        hair: require('../../assets/image/categories/hair.png'),
        makeup: require('../../assets/image/categories/makeup.png'),
        parfum: require('../../assets/image/categories/parfum.png')
    };

    const [categorias, setCategorias] = React.useState(null);

    React.useEffect(() => {
      fetch("/categorias")
        .then((res) => res.json())
        .then((data) => setCategorias(data));
    }, []);

    return(
        <main>
            <img src={imgHeader}></img>
            <Title> PRODUTOS </Title>
            <Wrapper>
                {!categorias ? "Carregando categorias..." : categorias.map((categoria, index) => {
                    let imagem = images[categoria.link_imagem] ? images[categoria.link_imagem] : categoria.link_imagem;
                    return  <BallComponent image={imagem} label={categoria.nome} size="medium" /> 
                    })}
            </Wrapper>
            <Title> RECOMENDADOS </Title>
            <ProductCarousel/> 
            <Newsletter />
            
        </main>


    );

}


export default Home