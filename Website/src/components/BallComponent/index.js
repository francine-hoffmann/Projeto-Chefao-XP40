import { Small, Medium, Large} from './style';

function BallComponent ({image, label, size, link}){
    switch(size){
        case "small":
            return (
                <a href={link}><Small src={image} alt={label} /></a>  
            )
        default:
        case "medium":
            return (
                <a href={link}><Medium src={image} alt={label} /></a>  
            )
        case "large":
            return (
                <a href={link}><Large src={image} alt={label} /></a>  
            )
    }


}

export default BallComponent 