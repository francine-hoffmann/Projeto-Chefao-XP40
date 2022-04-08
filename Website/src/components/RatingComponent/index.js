import { Container, Button, Message, CheckoutMore, Column, ClientName } from './styles';
import BallComponent from "../BallComponent";
import { Rating } from 'react-simple-star-rating';

function RatingComponent ({productName, productImage, clientName, rating, message}){
    return (
        <Container>
            <Column>
                <div>
                    <h4>{productName}</h4>
                    <BallComponent image={productImage} size="small"/>
                </div>
            </Column>
            <Column>
                <div>
                    <Rating allowHover={false} initialValue={rating} fillColor={'#90BF62'} readonly></Rating>
                    <ClientName>{clientName}</ClientName>
                    <Message>"{message}"</Message>
                    <CheckoutMore>Mais comentários sobre o porquê acho o produto incrível.</CheckoutMore>
                    <Button>Confira &gt;</Button>
                </div>
            </Column>
        </Container>  
    )
}

export default RatingComponent 