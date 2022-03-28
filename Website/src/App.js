import Routes from './Routes';
import GlobalStyles from './assets/styles/Global'
import Home from './pages/Home'
import Produtos from './pages/Produtos'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <GlobalStyles />      
      <Routes />
      <Home/>
      <Produtos/>
      <Footer />
    </div>
  );
}

export default App;
