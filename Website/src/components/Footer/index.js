import {FaFacebook, FaInstagram, FaWhatsapp} from 'react-icons/fa';
import './styles.css'

function Footer() {
    return (
        <footer>
            <div className="boxs">
                <h3>CONTATO</h3> 
                <h6>Horário de funcionamento</h6>
                <p>Segunda a Sexta: 0h ás 0h;</p>
                <p>Sábados e feriádos: 0h ás 0h;</p>
                <p>Domingos: 0h ás 0h;</p>
                <h6>Central de atendimento: (00) 0000-0000</h6>
                <h6>Whatsapp (00) 0-0000-0000</h6>
                <h6>E-mail: atendimento@natugama.com.br</h6>
            </div>
            <div className='boxs'>
                <h3>INFORMAÇÕES</h3>
                <ul>
                    <li><a href='../Sobre' target='_blank'>Sobre nós</a></li>
                    <li><a href='#'>Trocas e devoluções</a></li>
                    <li><a href='#'>Perguntas e respostas frequentes</a></li>
                    <li><a href='#'>Termos de uso</a></li>
                </ul>
            </div>
            <div className='social'>
            <ul>
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaWhatsapp /></li>
            </ul>
            </div>
            <p>
                &copy; 2022 <spam>Natugama Cosméticos Naturais LTDA</spam>
            </p>
        </footer>
    )
     
}

export default Footer;