import React from "react";
import { Page } from "../../pages/Sobre/style";
import "./sobre.css";

function Sobre() {
  return (
    // <div>
    //   <Page>
    //     <div class="jumbotron jumbotron-fluid">
    //       <div class="container">
    //         <h1 class="display-4">Fluid jumbotron</h1>
    //         <p class="lead">
    //           Este é um jumbotron modificado que ocupa todo o espaço horizontal
    //           de seu elemento pai.
    //         </p>
    //       </div>
    //     </div>
    //     <div className="card1">
    //       <div class="row">
    //         <div class="col-sm-10">
    //           <h1>SOBRE NÓS</h1>
    //           <p>
    //             Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz
    //             malandris se pirulitá.Interagi no mé, cursus quis, vehicula ac
    //             nisi.Admodum accumsan disputationi eu sit. Vide electram
    //             sadipscing et per.Cevadis im ampola pa arma uma pindureta.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="card2">
    //       <div class="row">
    //         <div class="col-sm-5">
    //           <div class="card">
    //             <div class="card-body">
    //               <h5 class="card-title">Título especial</h5>
    //               <p class="card-text">
    //                 Com suporte a texto embaixo, que funciona como uma
    //                 introdução a um conteúdo adicional.
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //         <div class="col-sm-5">
    //           <div class="card">
    //             <div class="card-body">
    //               <h5 class="card-title">Título especial</h5>
    //               <p class="card-text">
    //                 Com suporte a texto embaixo, que funciona como uma
    //                 introdução a um conteúdo adicional.
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </Page>
    // </div>

    <div className="main">
      <div className="image">
        <h1>Foto</h1>
      </div>
      <div className="card1">
        <h2>card1</h2>
        <p>
          Mussum Ipsum, cacilds vidis litro abertis. Mais vale um bebadis
          conhecidiss, que um alcoolatra anonimis.Paisis, filhis, espiritis
          santis.A ordem dos tratores não altera o pão duris.Quem num gosta di
          mé, boa gentis num é.
        </p>
      </div>

      <div className="card2">
        <div className="card3">
          <h3>card2</h3>
          <p>
            Mussum Ipsum, cacilds vidis litro abertis. Mais vale um bebadis
            conhecidiss, que um alcoolatra anonimis.Paisis, filhis, espiritis
            santis.A ordem dos tratores não altera o pão duris.Quem num gosta di
            mé, boa gentis num é.
          </p>
        </div>
        <div className="card3">
          <h3>card 3</h3>
          <p>
            Mussum Ipsum, cacilds vidis litro abertis. Mais vale um bebadis
            conhecidiss, que um alcoolatra anonimis.Paisis, filhis, espiritis
            santis.A ordem dos tratores não altera o pão duris.Quem num gosta di
            mé, boa gentis num é.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
