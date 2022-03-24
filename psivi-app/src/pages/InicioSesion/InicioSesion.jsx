import React from 'react'
import "./InicioSesion.css";
import {Link} from "react-router-dom";

function InicioSesion() {
    return (
        <div className="container">
            <div class="wrapper fadeInDown">
            <div id="formContent">
                <div class="fadeIn first">
                    Iniciar Sesion
                </div>


                <form>
                    <input type="text" id="login" class="fadeIn second" name="login" placeholder="Usuario" />
                    <input type="text" id="password" class="fadeIn third" name="login" placeholder="Contraseña" />
                    <input type="submit" class="fadeIn fourth" value="Entrar" />
                </form>


                <div id="formFooter">
                    <Link to="/">¿Olvidaste tu contraseña?</Link>
                    <p>¿Aun no tienes una cuenta?</p>
                    <Link to="/registro-paciente"> Paciente</Link>
                    <br></br>
                    <Link to="/registro-psicologo"> Psicologo</Link>
                </div>

            </div>
            </div>
        </div>
    )
}

export default InicioSesion