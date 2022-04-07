import React from 'react';
import { Container, Section, H2Title, H5Title, Formulario, FormInput, FormLabel, FormButton } from "./styles";

function Newsletter() {
    return (
        <Container>
            <section>
                <H2Title>
                    Cadastre-se e tenha sempre as últimas
                    atualizações dos produtos Natugama.
                </H2Title>
                <H5Title>
                    Prometemos que será periódica. Não vamos encher
                    sua caixa de e-mail á toa.
                </H5Title>
                <Formulario>
                    <form method="POST">
                        <FormLabel>Seu nome</FormLabel>
                        <FormInput type="text" required></FormInput>
                        <FormLabel>Seu e-mail</FormLabel>
                        <FormInput type="email" required></FormInput>
                        <FormButton>Cadastrar</FormButton> 
                    </form>                
                </Formulario>                 
            </section>
        </Container>
    )
        
        

}

export default Newsletter;