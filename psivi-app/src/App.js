import logo from './logo.svg';
import './App.css';
import { Landing } from './Landing/Landing';
import Navbar from '.pages/Header/Navbar';
import bootstrap from 'bootstrap';
import Footer from './pages/Footer/Footer';
//Aqui siempre vamos a definir nuestras rutas

function App() {
  return (
    <div className="App bg-light">
      <Navbar></Navbar>
      <Landing></Landing>
      <Footer></Footer>
    </div>
  );
}

export default App;
