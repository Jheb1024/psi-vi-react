import React from "react";
import "./Navbar.css";
import { Dropdown, Navbar, Nav, Container, NavDropdown, NavLink } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { app } from "../../auth/firebase-config";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
const Paciente = <li></li>;

function Header() {

  const auth = getAuth(app);
  const currentUser = auth.currentUser;

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
            <LinkContainer to="/">
              <Nav.Link >Precios</Nav.Link></LinkContainer>
              <LinkContainer to="lista-psicologo"><Nav.Link >Categorías</Nav.Link></LinkContainer>
            <LinkContainer to="/"><Nav.Link >¿Quiénes somos?</Nav.Link></LinkContainer>
          </Nav>
          <Nav>
            <NavDropdown title="Registro" id="collasible-nav-dropdown">
              <NavDropdown.Item href="registro-psicologo">Psicologo</NavDropdown.Item>
              <NavDropdown.Item href="registro-paciente">Paciente</NavDropdown.Item>
            </NavDropdown>
            <LinkContainer to="/inicio-sesion"><Nav.Link>Iniciar Sesión</Nav.Link></LinkContainer>
            <LinkContainer to="/inicio-sesion" onClick={cerrarSesion}><Nav.Link>Cerrar Sesión</Nav.Link></LinkContainer>
            

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
