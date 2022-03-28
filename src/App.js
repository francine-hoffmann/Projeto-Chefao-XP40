import Routes from './Routes';
import GlobalStyles from './assets/styles/Global'
import Sobre from './pages/Sobre';
import Home from './pages/Home'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <GlobalStyles />      
      <Routes />
      <Home/>
      <Footer />
    </div>
  );
}

export default App;
