import Bolinhas from "../../components/Bolinhas";
import MultiCarrossel from "../../components/Carrossel2";
import img from "../../assets/image/modelo.jpeg"
import { imagem, img } from './style';


function Home (){
    return(
        <main>
            <Bolinhas imagem={img} variante={imagem} />
            <a href="/" nome="Aromatizantes" > Aromatizantes </a>

            <MultiCarrossel/>
        </main>

    );

}

export default Home