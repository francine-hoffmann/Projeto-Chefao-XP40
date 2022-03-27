import React from "react";
import { Page } from "../../pages/Sobre/style";
import "./sobre.css";

function Sobre() {
  return (
    <div>
      <Page>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Fluid jumbotron</h1>
            <p class="lead">
              Este é um jumbotron modificado que ocupa todo o espaço horizontal
              de seu elemento pai.
            </p>
          </div>
        </div>
        <div className="card1">
          <div class="row">
            <div class="col-sm-10">
              <h1>SOBRE NÓS</h1>
              <p>
                Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz
                malandris se pirulitá.Interagi no mé, cursus quis, vehicula ac
                nisi.Admodum accumsan disputationi eu sit. Vide electram
                sadipscing et per.Cevadis im ampola pa arma uma pindureta.
              </p>
            </div>
          </div>
        </div>
        <div className="card2">
          <div class="row">
            <div class="col-sm-5">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Título especial</h5>
                  <p class="card-text">
                    Com suporte a texto embaixo, que funciona como uma
                    introdução a um conteúdo adicional.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-5">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Título especial</h5>
                  <p class="card-text">
                    Com suporte a texto embaixo, que funciona como uma
                    introdução a um conteúdo adicional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
}

export default Sobre;
