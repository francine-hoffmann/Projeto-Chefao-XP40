import Carousel from "react-elastic-carousel";
import { Container,  Item} from './style';
import Imagem1 from '../../assets/image/modelo.jpeg'
import BallComponent from '../BallComponent'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

function ProductCarousel() {
  return (
    <main>
      <Container>
        <Carousel breakPoints={breakPoints} itemsToShow={4} >
          <Item><BallComponent image={Imagem1} label="Produto 1" size="medium"/> </Item>
          <Item><BallComponent image={Imagem1} label="Produto 2" size="medium"/> </Item>
          <Item><BallComponent image={Imagem1} label="Produto 3" size="medium"/> </Item>
          <Item><BallComponent image={Imagem1} label="Produto 4" size="medium"/> </Item>
          <Item><BallComponent image={Imagem1} label="Produto 5" size="medium"/> </Item>
          <Item><BallComponent image={Imagem1} label="Produto 6" size="medium"/> </Item>
          <Item><BallComponent image={Imagem1} label="Produto 7" size="medium"/> </Item>
          <Item><BallComponent image={Imagem1} label="Produto 8" size="medium"/> </Item>
          <Item><BallComponent image={Imagem1} label="Produto 9" size="medium"/> </Item>
        </Carousel>
      </Container>
    </main>
  );
}

export default ProductCarousel