import logo from './logo.svg';
import './App.css';
import { React } from "react";
import * as ReactDOM from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Landing } from './Landing/Landing';

import Header from './pages/Header/Navbar.js';

import bootstrap from 'bootstrap';
import Footer from './pages/Footer/Footer';
import RegistroPsicologo from './pages/RegistroPsicologo/RegistroPsicologo';
import InicioSesion from './pages/InicioSesion/InicioSesion';
import RegistroPaciente from './pages/RegistroPaciente/RegistroPaciente';
import PacienteHome from './pages/Paciente/PacienteHome';
//Aqui siempre vamos a definir nuestras rutas

function App() {
  return (

    <BrowserRouter>
      <div className="App bg-light">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/registro-psicologo" element={<RegistroPsicologo />}/>
          <Route path="/registro-paciente" element={<RegistroPaciente/>}/>
          <Route path="/inicio-sesion" element={<InicioSesion/>}/>
          <Route path="/home-paciente" element={<PacienteHome/>}/>
        </Routes>
        

        
      </div>
    </BrowserRouter>









  );
}

export default App;
