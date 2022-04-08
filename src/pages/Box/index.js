import React from "react";

import { Container, Imagem, ComoFunciona, Menu1, Stamp, SubTitulo, Texto, OqueVem, Stamp2, Menu2 } from './style';

function Box() {
    var header = document.getElementById("header");
    if(header){
        header.classList.remove("solidBackground");
    }
  return (
    <Container>
      <Imagem src="\images\box.png" />
        <ComoFunciona>
            <Imagem src="\images\Como-funciona.png" alt="Como funciona" />
        </ComoFunciona>

        <Menu1>
            <Stamp>
                <SubTitulo>Descreva</SubTitulo>
                <Imagem src="\images\folha2.png" />
                <Texto>Preciso saber um pouco sobre vocês.Conte-me o tipo de pele, cabelo e preferências.</Texto>
            </Stamp>

            <Stamp>
                <SubTitulo>Escolha</SubTitulo>
                <Imagem src="\images\mulher2.png" />
                <Texto>Veja as minhas opções de plano e assine o que fazer mais sentido ao seu caso.</Texto>
            </Stamp>

            <Stamp>
                <SubTitulo>Receba</SubTitulo>
                <Imagem src="\images\caixa2.png" />
                <Texto>A melhor hora: receba a box, se surpreenda com os meus produtos e sinta-se bem ao usá-los.</Texto>
            </Stamp>            
        </Menu1>

        <OqueVem>
            <Imagem src="\images\OqueVem.png" alt='O que vem' />
        </OqueVem>

        <Menu2>
            <Stamp2>
                <Imagem src="\images\potinho.png" />
                <Texto>Produtos naturais <br/> diversificados para: rosto <br/> cabelo, corpo, etc.</Texto>
            </Stamp2>
            <Stamp2>
                <Imagem src="\images\sabonete.png" />
                <Texto>Todos cuidadosamente <br/> selecionados com base no <br/> seu perfil.</Texto>
            </Stamp2>
            <Stamp2>
                <Imagem src="\images\escova.png" /><br/>
                <Texto>Acessório surpresa porque <br/> sou grata pela sua <br/> preferência.</Texto>
            </Stamp2>
            <Stamp2>
                <Imagem src="\images\revista.png"/>
                <Texto>Revista Natugama, onde te <br/> dou dicas de cuidados <br/> sustentáveis e conscientes.</Texto>

            </Stamp2>
        </Menu2>

    </Container>
  );
}

export default Box;
