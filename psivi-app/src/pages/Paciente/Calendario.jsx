import React, { useEffect, useState } from 'react'
import { collectionGroup, query, where, getDocs,getFirestore,collection,onSnapshot } from "firebase/firestore";
import { app } from '../../auth/firebase-config';
function Calendario({user}) {
  const db = getFirestore(app);
  const [citas, setCitas] = useState([]);

  useEffect(
    () =>{
        onSnapshot(collection(db, 'allCitas'), (snapshot) => {
            setCitas(snapshot.docs.map((doc) => doc.data()))
        })}, //ahora debemos filtrar de acuerdi al id del usuario

    []);
  

  return (
    <div>Agenda
       {citas?.map(cita=>(
            <div>
                {cita.idPaciente}
            </div>
        ))}
    </div>
  )
}

export default Calendario