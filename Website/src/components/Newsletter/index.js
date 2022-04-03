import React from 'react';
import './newsletter.css';


function Newsletter() {
    return (
        <div>
            <section className='newsletter'>
                <h3> Cadastre-se e tenha sempre as últimas
                    atualizações dos produtos Natugama.
                </h3>
                <p>Prometemos que será periódica. Não vamos encher
                    caixa de e-mail á toa.
                </p>
                <form method='POST'>
                    Seu nome
                    <input type='text' required></input>
                    Seu e-mail
                    <input type='email' required></input>
                    <br></br>
                    <button>Cadastar</button>
                </form>
            </section>
        </div>
    )
        
        

}

export default Newsletter;
