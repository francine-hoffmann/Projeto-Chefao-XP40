import ElasticCarousel from "react-elastic-carousel";
import { Item } from './style';
import React from "react";
import "./style.css";

function Carousel() {
  const carouselRef = React.useRef(null);
  let resetTimeout;

  const [carouselItems, setCarouselItems] = React.useState(null);

    React.useEffect(() => {
      fetch("/carrosel")
        .then((res) => res.json())
        .then((data) => setCarouselItems(data));
    }, []);

  return (
    <main>
      <ElasticCarousel itemsToShow={1} enableAutoPlay showArrows={false} ref={carouselRef} onNextEnd={({ index }) => {
          clearTimeout(resetTimeout);
          if (index === carouselItems.length - 1) {
            resetTimeout = setTimeout(() => {
              carouselRef.current.goTo(0)
            }, 2000) // same time
          }
        }}>
            {!carouselItems ? <div>"Carregando carrossel..."</div>: carouselItems.map((item, index) => 
            <Item><img src={item.link_imagem} key={item.id} alt=""/></Item>
          )}
        </ElasticCarousel>
    </main>
  );
}

export default Carousel