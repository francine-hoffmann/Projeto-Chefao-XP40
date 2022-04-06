import React from 'react';
import './newsletter.css';


function Newsletter() {
    return (
        <div className="newsletter">
        <section>
            <h2>
                Cadastre-se e tenha sempre as últimas
                atualizações dos produtos Natugama.
            </h2>
            <h5>
                Prometemos que será periódica. Não vamos encher
                sua caixa de e-mail á toa.
            </h5>
            <div className="formulario">
                <form method="POST">
                    <p>Seu nome</p>
                    <input type="text" required></input>
                    <br></br><br></br>
                    <p>Seu e-mail</p>
                    <input type="email" required></input>
                    <br></br><br></br>
                    <button>Cadastrar</button> 
                </form>                
            </div>                 
        </section>
    </div>
    )
        
        

}

export default Newsletter;