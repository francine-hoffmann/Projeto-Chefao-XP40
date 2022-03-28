import Routes from './Routes';
import GlobalStyles from './assets/styles/Global'
import Sobre from './pages/Sobre';
import Home from './pages/Home'
import Produtos from './pages/Produtos'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <GlobalStyles />      
      <Routes />
      <Home/>
      <Sobre/>
      <Produtos/>
      <Footer />
    </div>
  );
}

export default App;
