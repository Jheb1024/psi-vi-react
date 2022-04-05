import { app } from "./firebase-config";
import {getFirestore, collection, getDocs, getDoc, doc, setDoc} from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from "react";


const db = getFirestore(app);

// no le hagan caso esta parte
export const administradoresP = async function getAdmin(){
    

    const admisRefCol = collection(db, "Admin");
        const adminSnapshot = await getDocs(admisRefCol);
        const adminList = adminSnapshot.docs.map(doc =>doc.data());
        console.log(adminList);
}

//aqui si
//Nuestra funcin debe ser asincrona
//Mandar todos los parametros del formulario

export const registro = async function registrarPaciente(email, password1, nombre, apm, app1, edad, fechana, motivo, dias){

    const auth = getAuth(app); //primero debemos saber cual es nuestro usuario por defecto no existe
                                //pero auth nos da uatorización

    //creamos un usuario con correo y contraseña
    const nuevoPaciente = await createUserWithEmailAndPassword(auth, email, password1)
    .then((nPaciente)=>{
        return nPaciente;
    }).catch(error=>{
        console.log(error.code);
    })

    console.log(nuevoPaciente);

    if(nuevoPaciente){
        //cambiar por paciente
        const docRef= doc(db,`Paciente/${nuevoPaciente.user.uid}`);
        //rellenar con todos los parametros
        await setDoc(docRef, {
            nombre: nombre,

            apellidoPaterno : app,

            apellidoPaterno : app1,

            apellidoMaterno : apm,
            Edad : edad,
            fechaNacimiento : fechana,
            correo : email,
            password : password1,

            motivo : motivo,
            Dias : dias

            
        }).then(()=>{
            console.log("Usuario registrado");
        }).catch(err=>{
            console.log("Hubo un error al registrarse"+err.message);
        })

        await setDoc(doc(db, `Usuarios/${nuevoPaciente.user.uid}`),{
            correo : email,
            rol: "paciente"
        }).then(()=>{
            window.location.href = "/inicio-sesion";
        })


    }

}
