import React, { useState,useEffect } from 'react'
import { app } from '../../auth/firebase-config';
import { getFirestore, doc,onSnapshot} from 'firebase/firestore';
import { Link } from 'react-router-dom';


function PerfilPaciente({perfilPaciente}) {
const db = getFirestore(app);
console.log(perfilPaciente)
    const [paciente, setPaciente] = useState(null);

    useEffect(()=>{
        const docRef = doc(db, `Paciente/${perfilPaciente}`);
        const unsubscribe = onSnapshot(docRef, (doc) => {
          console.log("Current data: ", doc.data());
          setPaciente(doc.data());
      });
      return()=>{
        unsubscribe();
      }
    
      }, []);




  return (
    <div className='card text-center m-2 mt-3 mb-3 shadow p-3 mb-5 bg-white rounded' style={{width:'50%'}} >
      <img src='' alt='' />
      <div className="card-body">
        <h4 className='card-title'>{paciente?.nombre}</h4>
        <p>
          {paciente?.apellidoPaterno} {paciente?.apellidoMaterno}
        </p>
        <p>
          Correo: {paciente?.correo}
        </p>

      </div>
    </div>
  )
}

export default PerfilPaciente