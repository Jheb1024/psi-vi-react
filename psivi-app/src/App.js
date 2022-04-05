import logo from './logo.svg';
import './App.css';
import { React, useState } from "react";
import * as ReactDOM from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Landing } from './Landing/Landing';
import Header from './pages/Header/Navbar';
import bootstrap from 'bootstrap';
import Footer from './pages/Footer/Footer';
import RegistroPsicologo from './pages/RegistroPsicologo/RegistroPsicologo';
import InicioSesion from './pages/InicioSesion/InicioSesion';
import RegistroPaciente from './pages/RegistroPaciente/RegistroPaciente';
import PacienteHome from './pages/Paciente/PacienteHome';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from './auth/firebase-config';
import PsicologoHome from './pages/Psicologo/PsicologoHome';
import AdminHome from './pages/Admin/AdminHome';
//Aqui siempre vamos a definir nuestras rutas
const auth = getAuth(app);

function App() {

  const [usuarioGlobal, setUsuarioGlobal] = useState(null);
onAuthStateChanged(auth, (usuarioFirebase)=>{
  if(usuarioFirebase){
    console.log("usuario global: "+usuarioFirebase.uid)
    setUsuarioGlobal(usuarioFirebase);
  }else{
    setUsuarioGlobal(null);
  }
})

  return (

    <BrowserRouter>
      <div className="App bg-light">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/registro-psicologo" element={<RegistroPsicologo />}/>
          <Route path="/registro-paciente" element={<RegistroPaciente/>}/>
          <Route path="/inicio-sesion" element={<InicioSesion/>}/>
          <Route path="/home-paciente" element={usuarioGlobal && <PacienteHome ID={usuarioGlobal}  />}/>
          <Route path='/home-psicologo' element={usuarioGlobal && <PsicologoHome ID={usuarioGlobal}/>}></Route>
          <Route path='/home-admin' element={usuarioGlobal && <AdminHome ID={usuarioGlobal}/>}></Route>
        </Routes>
       

        <Footer></Footer>
      </div>
    </BrowserRouter>









  );
}

export default App;
