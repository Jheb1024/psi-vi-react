import { app } from "./firebase-config";
import {getFirestore, collection, getDocs, getDoc, doc, setDoc} from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from "react";


const db = getFirestore(app);

// no le hagan caso esta parte
export const administradores = async function getAdmin(){
    

    const admisRefCol = collection(db, "Admin");
        const adminSnapshot = await getDocs(admisRefCol);
        const adminList = adminSnapshot.docs.map(doc =>doc.data());
        console.log(adminList);
}

//aqui si
//Nuestra funcin debe ser asincrona
//Mandar todos los parametros del formulario
export const registro = async function registrarPsicologo(email, password1){
    const auth = getAuth(app); //primero debemos saber cual es nuestro usuario por defecto no existe
                                //pero auth nos da uatorización

    //creamos un usuario con correo y contraseña
    const nuevoPsicologo = await createUserWithEmailAndPassword(auth, email, password1)
    .then((nPsicologo)=>{
        return nPsicologo;
    }).catch(error=>{
        console.log(error.code);
    })

    console.log(nuevoPsicologo);

    if(nuevoPsicologo){
        //cambiar por paciente
        const docRef= doc(db,`Psicologo/${nuevoPsicologo.user.uid}`);
        //rellenar con todos los parametros
        await setDoc(docRef, {
            correo : email,
            password : password1
            
        }).then(()=>{
            console.log("Usuario registrado");
        }).catch(err=>{
            console.log("Hubo un error al registrarse"+err.message);
        })

        await setDoc(doc(db, `Usuarios/${nuevoPsicologo.user.uid}`),{
            correo : email,
            rol: "psicologo"
        }).then(()=>{
            window.location.href = "/inicio-sesion";
        })


    }
}
