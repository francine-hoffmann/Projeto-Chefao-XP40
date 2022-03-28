import Routes from './Routes';
import GlobalStyles from './assets/styles/Global'
import Sobre from './pages/Sobre';
import Home from './pages/Home'
import Footer from './components/Footer';
import Produtos from './pages/Produtos'

function App() {
  return (
    <div className="App">
      <GlobalStyles />      
      <Routes />
      <Home/>
      <Footer/>
      <Sobre/>
      <Produtos/>
    </div>
  );
}

export default App;
