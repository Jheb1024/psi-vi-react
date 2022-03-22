import React from "react";
import "./Landing.css";
import MainImage from "D:/Proyecto/psi-vi-react/psivi-app/src/Assets/Images/main_psicology.jpg";

export function Landing(){
    return (
    <div className="presentacion">
            <h1>Bienvenido a Psi-Vi</h1>
            <p className="presentacion2">La plataforma que cuida de tu salud mental</p>
            <img src={MainImage}  class=" img-fluid float-end" alt="..."></img>
    </div>
        
    );
}