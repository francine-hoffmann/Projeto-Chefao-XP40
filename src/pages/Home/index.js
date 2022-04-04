import BallComponent from "../../components/BallComponent";
import MultiCarrossel from "../../components/Carrossel2";
import img from "../../assets/image/modelo.jpeg"
import { imagem1 } from './style';

import Newsletter from "../../components/Newsletter";


function Home (){
    return(
        <main>
            <BallComponent image={img} size="large" />
            <a href="/" nome="Aromatizantes" > Aromatizantes </a>

            <MultiCarrossel/> 
            <Newsletter />
            
        </main>

    );

}

export default Home