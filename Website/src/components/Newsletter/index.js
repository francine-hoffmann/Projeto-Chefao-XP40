import React from 'react';
import { Container, H2Title, H5Title, Formulario, FormInput, FormLabel, FormButton } from "./styles";
import { useState } from "react";

function Newsletter() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        console.log(JSON.stringify({
            nome: name,
            email: email
        }));
        try {
          let res = await fetch("/newsletters", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome: name,
                email: email
            }),
          });
          if (res.status === 200 || res.status === 201) {
            setName("");
            setEmail("");
          }
        } catch (err) {
          console.log(err);
        }
      };

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
                    <form method="POST" onSubmit={handleSubmit}>
                        <FormLabel>Seu nome</FormLabel>
                        <FormInput type="text" required onChange={(e) => setName(e.target.value)} value={name}></FormInput>
                        <FormLabel>Seu e-mail</FormLabel>
                        <FormInput type="email" required onChange={(e) => setEmail(e.target.value)} value={email}></FormInput>
                        <FormButton>Cadastrar</FormButton> 
                    </form>                
                </Formulario>                 
            </section>
        </Container>
    )
}

export default Newsletter;