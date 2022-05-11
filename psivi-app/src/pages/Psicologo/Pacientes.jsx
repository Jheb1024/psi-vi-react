import React, { useEffect,useState } from 'react'
import { collection, query, where, getDocs ,getFirestore,onSnapshot} from "firebase/firestore";
import { app } from '../../auth/firebase-config';

function Pacientes({user}) {
    const db = getFirestore(app);
    const [pacientes, setPacientes] = useState([]);
    console.log(user.uid)

useEffect(
        () =>
            onSnapshot(collection(db, 'Citas',user.uid,'citas'), (snapshot) => {
                setPacientes(snapshot.docs.map((doc) => doc.data()))
            }),

        []);
    

  return (
    <div>Pacientes

        {pacientes?.map(paciente=>(
            <div>
                {paciente.title}
            </div>
        ))}
    </div>
  )
}

export default Pacientes