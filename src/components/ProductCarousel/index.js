import Carousel from "react-elastic-carousel";
import { Container,  Item} from './style';
import BallComponent from '../BallComponent';
import React from "react";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

function ProductCarousel() {
  const carouselRef = React.useRef(null);
  let resetTimeout;

  const [products, setProducts] = React.useState(null);

    React.useEffect(() => {
      fetch("/produtos?limite=8")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);

  return (
    <main>
      <Container>
        <Carousel breakPoints={breakPoints} itemsToShow={4} enableAutoPlay ref={carouselRef} onNextEnd={({ index }) => {
          clearTimeout(resetTimeout);
          if (index === products.length - 4) {
            resetTimeout = setTimeout(() => {
              carouselRef.current.goTo(0)
            }, 2000) // same time
          }
        }}>
          {!products ? <div>"Carregando produtos..."</div>: products.map((product, index) => 
            <Item><BallComponent image={product.link_imagem} label={product.nome} size="medium" key={product.id}/></Item>
          )}
        </Carousel>
      </Container>
    </main>
  );
}

export default ProductCarousel