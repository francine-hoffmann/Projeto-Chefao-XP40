import Routes from './Routes';
import GlobalStyles from './assets/styles/Global'
import Sobre from './pages/Sobre';
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <GlobalStyles />      
      <Routes />
      <Home/>
    </div>
  );
}

export default App;
