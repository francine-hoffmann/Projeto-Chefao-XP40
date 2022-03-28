


function Bolinhas ({imagem, nomeProduto, variante, nomeLink}){
    return (
        <main>
            <img src={imagem} alt={nomeProduto} className={variante} />
            
            <a href="/"> {nomeLink} </a>
        </main>
    )


}

export default Bolinhas 