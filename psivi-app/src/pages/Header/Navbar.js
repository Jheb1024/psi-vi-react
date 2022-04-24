import React, {useEffect, useState} from "react";
import "./Navbar.css";
import { Dropdown, Navbar, Nav, Container, NavDropdown, NavLink } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { app } from "../../auth/firebase-config";
import { getFirestore, collection, getDocs, getDoc, doc, setDoc, onSnapshot } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {FaUser} from 'react-icons/fa';

const db = getFirestore(app);
const Paciente = <li></li>;

function Header() {
  const [userPsyco, setUserPsyco]=useState(null);
  const [userPatient, setUserPatient]=useState(null);
  const auth = getAuth(app);
  const currentUser = auth.currentUser;

  

  const [usuarioGlobal, setUsuarioGlobal] = useState(null);
onAuthStateChanged(auth, async(usuarioFirebase)=>{
  if(usuarioFirebase){
    console.log("usuario desde le nabvar: "+usuarioFirebase.uid)
    //setUsuarioGlobal(usuarioFirebase);

  const docRefP = doc(db, `Paciente/${usuarioFirebase.uid}`);
  const docSnapP = await getDoc(docRefP);

  const docRefPs = doc(db, `Psicologo/${usuarioFirebase.uid}`);
  const docSnapPs = await getDoc(docRefPs);
  
  if (docSnapP.exists() && userPatient===null) {
    console.log("Document data:", docSnapP.data());
    setUserPatient(docSnapP.data());
    
  } else {
    // doc.data() will be undefined in this case
    //setUserPatient(null);
    console.log("No such document!");
  }

  if(docSnapPs.exists() && userPsyco === null){
    console.log("Document data:", docSnapPs.data());
    setUserPsyco(docSnapPs.data());
  }else {
    // doc.data() will be undefined in this case
    //setUserPsyco(null);
    console.log("No such document!");
  }
      console.log("mostramos el user hook", userPatient);
  }else{
    setUserPatient(null);
    setUserPsyco(null);
    //
  }
})
  

  function cerrarSesion() {
    signOut(auth)
      .then((user) => {
        console.log("El usaurio a cerrado la sesion");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <Navbar className="nav-color" collapseOnSelect expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand >Psi-Vi</Navbar.Brand></LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/"><Nav.Link >Precios</Nav.Link></LinkContainer>
            <LinkContainer to="/psicologos"><Nav.Link >Psicologos</Nav.Link></LinkContainer>
            <LinkContainer to="/"><Nav.Link >Categorías</Nav.Link></LinkContainer>
            <LinkContainer to="/"><Nav.Link >¿Quiénes somos?</Nav.Link></LinkContainer>

          </Nav>
          <Nav>
            {!currentUser ? <NavDropdown title="Registro" id="collasible-nav-dropdown">
              <NavDropdown.Item href="registro-psicologo">Psicologo</NavDropdown.Item>
              <NavDropdown.Item href="registro-paciente">Paciente</NavDropdown.Item>
            </NavDropdown> : null}
            {userPsyco ? <NavDropdown title= {<FaUser/>} id="">
              <NavDropdown.Item href="/home-psicologo">Psicologos</NavDropdown.Item>
              <NavDropdown.Item href="/home-psicologo">Pacientes</NavDropdown.Item>
            </NavDropdown> : null}
            {userPatient ? <NavDropdown title= {<FaUser/>} id="">
              <NavDropdown.Item href="/home-paciente">Mi cuenta</NavDropdown.Item>
              <NavDropdown.Item href="/usuario/paciente/calendario">Calendario</NavDropdown.Item>
            </NavDropdown> : null}
            {currentUser ? <LinkContainer to="#"><Nav.Link></Nav.Link></LinkContainer> :null}
            {!currentUser ? <LinkContainer to="/inicio-sesion"><Nav.Link>Iniciar Sesión</Nav.Link></LinkContainer> : null}
            {currentUser ? <LinkContainer to="/inicio-sesion" onClick={cerrarSesion}><Nav.Link>Cerrar Sesión</Nav.Link></LinkContainer> : null}


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
