import React from 'react'
import * as S from "./style"

const Contato = () => {
  return (
    <S.Container>
      <div className='banner'></div>
      <S.Conteudo>
        <article className='section-contato'>
          <h3>
            CONTATO
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, vel. Iusto dolorum mollitia voluptate nihil eius ipsa nulla culpa labore corrupti ducimus debitis nobis a, voluptatem omnis! Veritatis, facere porro.
          </p>
        </article>
        <section className='contend-infos'>
          <div className='section-infos'>
          <article className='infos'>
            <span className='bolinha'></span>
            <div>
              <h3>Localização</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse suscipit quae placeat sunt enim officia exercitationem blanditiis similique eius repellat! Error sint ex ea suscipit facere ullam quasi nisi voluptas.</p>
              </div>
          </article>
          <article className='infos'>
            <span className='bolinha'></span>
            <div>
              <h3>Telefone</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse suscipit quae placeat sunt enim officia exercitationem blanditiis</p>
              </div>
          </article>
          <article className='infos'>
            <span className='bolinha'></span>
            <div>
              <h3>Siga a Natugama</h3> 
              <div className='bolinhas'>
              <span className='bolinha'></span>
              <span className='bolinha'></span>
              <span className='bolinha'></span>
              </div>
              </div>
          </article>
          </div>
          <S.Form>
          <h3>Entre Em contato</h3>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <textarea name="" id="" ></textarea>
          <input type="button" value="Enviar" />
          </S.Form>
        </section>
      </S.Conteudo>
    </S.Container>

  )
}

export default Contato

