import React from 'react'
import {Table} from 'react-bootstrap'
import { getFirestore, collection, getDocs, getDoc, doc, setDoc, onSnapshot } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from "react";
import { app } from "../../auth/firebase-config";
import {Card} from 'react-bootstrap'
import EditarPerfil from './EditarPerfil';


function PsicologoHome({ID}) {
  const db = getFirestore(app);
  const [user, setUser]=useState(null);
  useEffect(()=>{
    const docRef = doc(db, `Psicologo/${ID.uid}`);
    const unsubscribe = onSnapshot(docRef, (doc) => {
      console.log("Current data: ", doc.data());
      setUser(doc.data());
  });
  return()=>{
    unsubscribe();
  }

  }, []);

  return (
    <div>Mi información
      <div className='Perfil'>
            <Card>
  <Card.Header as="h5">Información Personal</Card.Header>
  <Card.Body>
    <Card.Title>Datos</Card.Title>
    <Card.Text>
      <b>Nombre:</b> {user?.nombre}
    </Card.Text>
    <Card.Text><b>Apellidos:</b> {user?.apellidoPaterno} {user?.apellidoMaterno}</Card.Text>
    <Card.Text><b>Edad:</b> {user?.edad}</Card.Text>
    <Card.Text><b>Correo:</b> {user?.correo}</Card.Text>
  </Card.Body>
</Card>
            

           { user ? <div><EditarPerfil Perfil ={user} uid={ID}/></div>:null}
        </div>
    
    </div>
    )
}

export default PsicologoHome