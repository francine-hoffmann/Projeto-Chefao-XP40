import Carousel from 'flat-carousel';
import Carousel from "react-elastic-carousel";


const images = [
    { src: 'some image' }
];

const MyCarousel = () => (
    <Carousel>
        {images.map((image, index) => (
            <div
                key={index}
                className="demo-item"
                style={{ backgroundImage: 'url(' + image.src + ')' }}
            />
        ))}
    </Carousel>
);