import Carousel from "react-elastic-carousel";
import { Carrossel, Titulo, Item, Image} from './style';
import Imagem1 from '../../assets/image/modelo.jpeg'

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
          <Item><Image src={Imagem1}/> </Item>
          <Item><Image src={Imagem1}/> </Item>
          <Item><Image src={Imagem1}/> </Item>
          <Item><Image src={Imagem1}/> </Item>
          <Item><Image src={Imagem1}/> </Item>
          <Item><Image src={Imagem1}/> </Item>
          <Item><Image src={Imagem1}/> </Item>
        </Carousel>
      </Carrossel>
    </main>
  );
}

export default MultiCarrossel