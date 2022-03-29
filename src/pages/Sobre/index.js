import React from "react";
import { Wrapper } from "../../components/Header/styles";
import "./sobre.css";
import Footer from '../../components/Footer';

function Sobre() {
  return (
    <div className="body">
      <div className="image">
        <p>image goes here</p>
      </div>

      <div className="card1">
        <h1>SOBRE NÓS</h1>
        <p>
          Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris
          se pirulitá.Interagi no mé, cursus quis, vehicula ac nisi.Admodum
          accumsan disputationi eu sit. Vide electram sadipscing et per.Cevadis
          im ampola pa arma uma pindureta.
        </p>
      </div>
      <div className="card2">
        <div className="card3">
          <h2>TÍTULO 1</h2>
          <p>
            Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz
            malandris se pirulitá.Interagi no mé, cursus quis, vehicula ac
            nisi.Admodum accumsan disputationi eu sit. Vide electram sadipscing
            et per.Cevadis im ampola pa arma uma pindureta.
          </p>
        </div>
        <div className="card3">
          <h2>TÍTULO 2</h2>
          <p>
            Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz
            malandris se pirulitá.Interagi no mé, cursus quis, vehicula ac
            nisi.Admodum accumsan disputationi eu sit. Vide electram sadipscing
            et per.Cevadis im ampola pa arma uma pindureta.
          </p>
        </div>
      </div>   
      <Footer/>   
    </div>
  );
}

export default Sobre;
