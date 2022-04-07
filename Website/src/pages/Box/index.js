import React from "react";
import ComoFunciona from "../../assets/image/Como_funciona.png";
import Folha2 from "../../assets/image/folha2.png";
import Mulher2 from "../../assets/image/mulher2.png";
import Caixa2 from "../../assets/image/caixa2.png";

import OqueVem from "../../assets/image/O_que_vem.png";

import "./box.css";

import Potinho from '../../assets/image/potinho.png';
import Sabonete from '../../assets/image/sabonete.png';
import Escovas from '../../assets/image/escovas.png';
import Revista from '../../assets/image/revista.png';

import { Menu1 } from './style';

function Box() {
  return (
    <div className="body">
      <div className="image"></div>
        <div className="como-funciona">
            <img src={ComoFunciona} alt="Como funciona"></img>
        </div>

        <div className="menu1">
            <div className="stamp">
                <h3>Descreva</h3>
                <img src={Folha2}></img>
                <p>Preciso saber um pouco sobre vocês.<br />Conte-me o tipo de pele, cabelo e <br />preferências.</p>
            </div>

            <div className="stamp">
                <h3>Escolha</h3>
                <img src={Mulher2}></img>
                <p>Veja as minhas opções de plano e <br />assine o que fazer mais sentido ao<br />seu caso.</p>
            </div>

            <div className="stamp">
                <h3>Receba</h3>
                <img src={Caixa2}></img>
                <p>A melhor hora: receba a box, se<br />surpreenda com os meus produtos e<br />sinta-se bem ao usá-los.</p>
            </div>           
        </div>

        <div className="OqueVem">
            <img src={OqueVem} alt='O que vem'></img>
        </div>

        <div className="menu2">
            <div className='stamp2'>
                <img src={Potinho}></img>
                <p>Produtos naturais <br/> diversificados para: rosto <br/> cabelo, corpo, etc.</p>
            </div>
            <div className='stamp2'>
                <img src={Sabonete}></img>
                <p>Todos cuidadosamente <br/> selecionados com base no <br/> seu perfil.</p>
            </div>
            <div className='stamp2'>
                <img src={Escovas}></img>
                <p>Acessório surpresa porque <br/> sou grata pela sua <br/> preferência.</p>
            </div>
            <div className='stamp2'>
                <img src={Revista}></img>
                <p>Revista Natugama, onde te <br/> dou dicas de cuidados <br/> sustentáveis e conscientes.</p>
            </div>
        </div>

    </div>
  );
}

export default Box;
