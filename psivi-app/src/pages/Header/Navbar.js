import React from 'react';
import "./Navbar.css";

const Paciente = (
  <li>

  </li>
);

function Navbar() {
  return (
    <div className='container'>
      <nav class="navbar navbar-expand-md navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand .text-blue .text-darken-lg" href="/">Psi-Vi</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Precios</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Psicólogos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Categorías</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">¿Quiénes somos?</a>
              </li>
            </ul>

            <ul class="navbar-nav mb-2 ">
              <li class="nav-item">
                <a class="nav-link" href="/inicio-sesion">Iniciar Sesión</a>
                <a class="nav-link" href="/">Registrarse</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar