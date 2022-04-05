import React from 'react'
import { app } from "../../auth/firebase-config";
import { getFirestore, collection, getDocs, getDoc, doc, setDoc, onSnapshot } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from "react";
import PerfilPaciente from './PerfilPaciente';




 const PacienteHome = ({ID})=>{
  const [user, setUser]=useState(null);
console.log(ID);
const db = getFirestore(app);
   function GetPaciente(){
    
    const auth = getAuth(app);
    //const uid = auth.currentUser;
    
    const docRef = doc(db, `Paciente/${ID.uid}`);
    //const consulta = await getDoc(docRef);
    const unsub =  onSnapshot(docRef, (doc) => {
      console.log("Current data: ", doc.data());
      return doc;
  });
    
    //revisar si existe
    if(unsub.exists()){
      const infoUser = unsub.data();
      console.log("se muuestra el info user en el if del unsub")
      console.log(infoUser);
      return infoUser;
    }else{
      console.log("Ha ocurrido un problema al obtener la información");
    }
    

  }
  useEffect(()=>{
    const docRef = doc(db, `Paciente/${ID.uid}`);
    const unsubscribe = onSnapshot(docRef, (doc) => {
      console.log("Current data: ", doc.data());
      setUser(doc.data());
  });
  return()=>{
    unsubscribe();
  }

  }, []);

  return (

    <div>PacienteHome
      
      {user ? <PerfilPaciente Perfil={user} uid={ID}/> : null}
      <div>nombre</div>
    </div>
  )
}

export default PacienteHome