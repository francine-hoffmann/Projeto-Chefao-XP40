import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill, RiFacebookCircleFill } from "react-icons/ri";
import './styles.css'

function Footer() {
    return (
        <body>
            <footer className="footer">
                <div className='container'>
                    <div className='box'>
                        <h4> CONTATO </h4>
                        <p>Horário de funcionamento</p>
                        <li>Segunda a Sexta: 0h às 0h;</li>
                        <li>Sábados e feriádos: 0h às 0h;</li>
                        <li>Domingos: 0h às 0h.</li>
                        <p>Central de atendimento: (00) 0000-0000</p>
                        <p>Whatsapp (00) 0-0000-0000</p>
                        <p>E-mail: atendimento@natugama.com.br</p>
                    </div>    
                    <div className='info'>
                        <h4> INFORMAÇÕES </h4>
                            <ul>
                                <li><a href='../Sobre' target='_blank'>Sobre nós</a></li>
                                <li><a href='_'>Trocas e devoluções</a></li>
                                <li><a href='_'>Perguntas e respostas frequentes</a></li>
                                <li><a href='_'>Termos de uso</a></li>
                            </ul>
                    </div>
                    <div className='social'>
                        <ul className='social_links'>
                        <a href='https://www.instagram.com' target='_blank' rel="noreferrer"><li><AiFillInstagram /></li></a>
                        <a href='https://www.facebook.com'  target='_blank' rel="noreferrer"><li><RiFacebookCircleFill /></li></a>
                        <a href='https://web.whatsapp.com'  target='_blank' rel="noreferrer"><li><RiWhatsappFill /></li></a>
                        </ul>
                    </div>
                    
                </div>   
                    <p className='copy'>
                       <br></br>&copy; 2022 <span>Natugama Cosméticos Naturais LTDA</span>
                    </p>
        </footer>
        </body>
        
    )
     
}

export default Footer;