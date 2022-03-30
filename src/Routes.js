import { BrowserRouter, Routes as RoutesWrapper, Route } from 'react-router-dom';
import Header from './components/Header';
import Sobre from './pages/Sobre';
import Newsletter from './components/Newsletter';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Footer from './components/Footer';

function Routes() {
    return (
        <BrowserRouter>
        <Header />
            <RoutesWrapper>
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/newsletter' element={<Newsletter />} />
                <Route path='/' element={<Home />} />
                <Route path='/produtos' element={<Produtos />} />
            </RoutesWrapper> 
            <Footer />     
        </BrowserRouter>
    )
}

export default Routes;