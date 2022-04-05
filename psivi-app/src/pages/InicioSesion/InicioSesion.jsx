import React from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { doc, getDoc, getFirestore } from "firebase/firestore";
import { app } from "D:/Proyecto/psi-vi-react/psivi-app/src/auth/firebase-config.js";

import "./InicioSesion.css";
import {Link} from "react-router-dom";

function InicioSesion() {
    const auth = getAuth(app);
    
    var Error = "";

     function iniciarSesion( email, password){
        return signInWithEmailAndPassword(auth, email, password)
        
      }

    function onSubmit() {

        const db = getFirestore();
        const user = auth.currentUser;
        console.log("uiddd" + user.uid);

        if (user !== null) {

            const docRef = doc(db, "Usuarios", user.uid);

            getDoc(docRef).then((doc) => {
                console.log(doc.data(), doc.data().correo, doc.data().rol);
                const roldata = doc.data().rol;
                if (roldata === "admin") {
                    //agregar home admin 
                } else if (roldata === "psicologo") {
                    //agregar home psico
                } else if (roldata === "paciente") {
                    window.location.href = "/home-paciente";
                } else {
                   
                }
            })
        }
    }

    async function submitHandler(e) {
        e.preventDefault();

        const email = e.target.elements.email.value;
        const pass = e.target.elements.password.value;
        console.log("submit", email, pass);

        await iniciarSesion(email, pass).then(() => {
            onSubmit()
        }).catch(error => {
            console.log("entramos al catch, error: ", error)
            switch (error.code) {
                case 'auth/invalid-email':
                    console.log();
                    Error = "Email invalido";
                   
                    break;

                case 'auth/user-disabled':
                    console.log("Este usuario ha sido desabilitado");
                    Error = "Este usuario ha sido desabilitado";
                   
                    break;

                case 'auth/user-not-found':
                    console.log("Usuario no encontrado");
                    Error = "Usuario no encontrado";
                  
                    break;

                case 'auth/wrong-password':
                    console.log("Contraseña incorrecta");
                 
                    break;

                default:
                    
                    break;
            }
        })

    }

    return (
        <div className="container">
            <div class="wrapper fadeInDown">
            <div id="formContent">
                <div class="fadeIn first">
                    Iniciar Sesion
                </div>


                <form className="formulario" onSubmit={submitHandler}>
                    <input type="text" id="email" class="fadeIn second" name="email" placeholder="Usuario" />
                    <input type="password" id="password" class="fadeIn third" name="login" placeholder="Contraseña" />
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