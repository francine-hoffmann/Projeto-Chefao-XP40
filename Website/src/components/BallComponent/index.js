import { Small, Medium, Large, Label} from './styles';

function BallComponent ({image, label, size, link}){
    switch(size){
        case "small":
            return (
                <a href={link}>
                    <Small src={image} alt={label} />
                </a>  
            )
        default:
        case "medium":
            return (
                <a href={link}>
                    <Medium src={image} alt={label} />
                    <Label>{label}</Label>
                </a>  
            )
        case "large":
            return (
                <a href={link}>
                    <Large src={image} alt={label} />
                    <p>{label}</p>
                </a>  
            )
    }


}

export default BallComponent 