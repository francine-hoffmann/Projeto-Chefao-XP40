import React from "react";
import {Imagem, Container, Titulo, SubTitulo, Texto, Card1, Card2, Card3} from "./style.js"

function Sobre() {
  
  var header = document.getElementById("header");
  if(header){
    header.classList.remove("solidBackground");
  }
  return (
    <main> 
      <Imagem src="\images\sobre.png" /> 

        <Container>
          <Card1>
            <Titulo>SOBRE MIM</Titulo>
            <Texto>
              Quase como uma crença, mais como um ato político, mas cuidadosa e
              resiliente, eu, a Natugama, proponho uma nova visão sobre a relevância
              no desenvolvimento de um produto natural que não somente nos cuide,
              mas considere cuidados para a sua origem.
            </Texto>
            <Texto>Ser sustentável não deve ser só uma ideia, e sim um propósito.</Texto>
          </Card1>

          <Card2>
            <Card3>
              <SubTitulo>Para o exterior</SubTitulo>
              <Texto>
                Sou especializada em embelezar e tratar seu eu físico com
                biotecnologia e princípios ativos natuais. Sou tão natural quanto a
                sua beleza ao decidir assumir o meu propósito.
              </Texto>
            </Card3>
            <Card3>
              <SubTitulo>Para o interior</SubTitulo>
              <Texto>
                Digo que o cuidado não pode desconsiderar que devemos estar em paz
                com nós mesmos e, ainda mais, com a própria natureza.
              </Texto>
            </Card3>
          </Card2>
        </Container>
    </main> 
  );
}

export default Sobre;
