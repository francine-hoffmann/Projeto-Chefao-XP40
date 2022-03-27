import { BrowserRouter, Routes as RoutesWrapper, Route } from 'react-router-dom';
import Header from './components/Header';
import Sobre from './pages/Sobre';

function Routes() {
    return (
        <BrowserRouter>
        <Header />
            <RoutesWrapper>
                <Route path='/sobre' element={<Sobre />} />
            </RoutesWrapper>
        </BrowserRouter>
    )
}

export default Routes;