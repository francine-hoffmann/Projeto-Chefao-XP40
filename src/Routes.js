import { BrowserRouter, Routes as RoutesWrapper, Route } from 'react-router-dom';
import Header from './components/Header';
import Sobre from './pages/Sobre';
import Newsletter from './pages/Newsletter';

function Routes() {
    return (
        <BrowserRouter>
        <Header />
            <RoutesWrapper>
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/newsletter' element={<Newsletter />} />
            </RoutesWrapper>
        </BrowserRouter>
    )
}

export default Routes;