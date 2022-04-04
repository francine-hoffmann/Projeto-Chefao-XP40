import Carousel from "react-elastic-carousel";
import { Carrossel, Titulo, Item, Image} from './style';
import Imagem1 from '../../assets/image/modelo.jpeg'
import BallComponent from '../BallComponent'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

function MultiCarrossel() {
  return (
    <main>
      <Titulo> RECOMENDADOS </Titulo>
      <Carrossel>
        <Carousel breakPoints={breakPoints} itemsToShow={4} >
          <Item><BallComponent image={Imagem1} label="Produto 1" size="small"/> </Item>
          <Item><BallComponent image={Imagem1} label="Produto 1" size="medium"/> </Item>
          <Item><BallComponent image={Imagem1} label="Produto 1" size="large"/> </Item>
          <Item><BallComponent image={Imagem1} label="Produto 1" size="small"/> </Item>
          <Item><BallComponent image={Imagem1} label="Produto 1" size="medium"/> </Item>
          <Item><BallComponent image={Imagem1} label="Produto 1" size="large"/> </Item>
          <Item><BallComponent image={Imagem1} label="Produto 1" size="small"/> </Item>
          <Item><BallComponent image={Imagem1} label="Produto 1" size="medium"/> </Item>
          <Item><BallComponent image={Imagem1} label="Produto 1" size="large"/> </Item>
        </Carousel>
      </Carrossel>
    </main>
  );
}

export default MultiCarrossel