import logo from './logo.svg';
import './App.css';
import { Landing } from './Landing/Landing';
import Navbar from './Componentes/Navbar';
//Aqui siempre vamos a definir nuestras rutas

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Landing></Landing>
    </div>
  );
}

export default App;
