import React, { useState } from 'react'
import * as S from "./style"

  function Contato() {
    
    var header = document.getElementById("header");
    if(header){
      header.classList.remove("solidBackground");
    }
  const [nome, setNome] = useState("")
  const [telefone, setTelefone] = useState("")
  const [email, setEmail] = useState("")
  const [mensagem, setMensagem] = useState("")
  function adicionarContato (event){ 
    
    
    const body = {
      nome,
      telefone,
      email,
      mensagem,
    }
    console.log(body)


      let handleSubmit = async (e) => {
          e.preventDefault();
          console.log(JSON.stringify({
              nome: nome,
              telefone: telefone,
              email: email,
              mensagem: mensagem
          }));
          try {
            let res = await fetch("/contato", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                nome: nome,
                telefone: telefone,
                email: email,
                mensagem: mensagem
              }),
            });
            if (res.status === 200 || res.status === 201) {
              setNome("");
              setTelefone("");
              setEmail("");
              setMensagem("");
            }
          } catch (err) {
            console.log(err);
          }
        };
  
  
    
  
  }
     
  return (
    <S.Container>
      <div className='banner'> </div>
      <S.Conteudo>
        <article className='section-contato'>
          <h3>
            CONTATO
          </h3>
          <p>
            Se deseja entrar em contato, seja para pedir ajuda, esclarecimento ou mais informações sobre os produtos, tenho várias opções para você:
          </p>
        </article>
        <section className='contend-infos'>
          <div className='section-infos'>
          <article className='infos'>
            <span className='bolinha'> <img src='/images/localizacao.png'alt='icone localização'/></span>
            <div>
              <h3>Localização</h3>
              <p>Rua Tal. 1234 - Complemento - Gama Academy - São Paulo CEP 00000-000</p>
              </div>
          </article>
          <article className='infos'>
            <span className='bolinha'><img src='/images/phone.png'alt='icone de telefone'/></span>
            <div>
              <h3>Atendimento</h3>
              <p>Central de atendimento: (00) 0000-0000 <br/> WhatsApp: (00) 0000-0000</p>
              </div>
          </article>
          <article className='infos'>
            <span className='bolinha'><img src='/images/person.png'alt='icone de personagem'/></span>
            <div>
              <h3>Redes Natugama</h3> 
              <div className='bolinhas'>
              <span className='bolinha'> <img src='/images/instagram.png'alt='icone do instagram'/></span>
              <span className='bolinha'> <img src='/images/facebooklogo.png'alt='icone do instagram'/></span>
              <span className='bolinha'> <img src='/images/WhatsApp.png'alt='icone do instagram'/></span>
              </div>
              </div>
          </article>
          </div>
          <S.Form>
          <h3>Formulário de Contato
          </h3>
          <label>Nome</label>
          <input type="text" value = {nome} 
            onChange = {(event) => setNome(event.target.value)}
          />
          <label>Telefone</label>
          <input type="text" value = {telefone} 
            onChange = {(event) => setTelefone(event.target.value)}/>
          <label>E-mail</label>
          <input type="text" value = {email} 
            onChange = {(event) => setEmail(event.target.value)}/>
          <label>Mensagem</label>
          <textarea value = {mensagem} 
            onChange = {(event) => setMensagem(event.target.value)}> </textarea >
          <input type="button" value="Enviar" 
          
          onClick={adicionarContato} />
          </S.Form>
        </section>
      </S.Conteudo>
    </S.Container>

  )
}

export default Contato

