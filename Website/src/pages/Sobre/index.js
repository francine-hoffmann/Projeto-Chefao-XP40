import React from "react";
import "./sobre.css";

function Sobre() {
  return (
    <div className="body">
      <div className="image">
        {/* <img src={Group142} alt='Background Image' /> */}
      </div>

      <div className="card1">
        <h1>SOBRE MIM</h1>
        <p>
          Quase como uma crença, mais como um ato político, mas cuidadosa e
          resiliente, eu, a Natugama, proponho uma nova visão sobre a relevância
          no desenvolvimento de um produto natural que não somente nos cuide,
          mas considere cuidados para a sua origem.
        </p>
        <p>Ser sustentável não deve ser só uma ideia, e sim um propósito.</p>
      </div>
      <div className="card2">
        <div className="card3">
          <h2>Para o exterior</h2>
          <p>
            Sou especializada em embelezar e tratar seu eu físico com
            biotecnologia e princípios ativos natuais. Sou tão natural quanto a
            sua beleza ao decidir assumir o meu propósito.
          </p>
        </div>
        <div className="card3">
          <h2>Para o interior</h2>
          <p>
            Digo que o cuidado não pode desconsiderar que devemos estar em paz
            com nós mesmos e, ainda mais, com a própria natureza.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
