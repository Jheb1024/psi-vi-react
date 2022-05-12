import React, { useEffect,useState } from 'react'
import { collection, query, where, getDocs ,getFirestore,onSnapshot} from "firebase/firestore";
import { app } from '../../auth/firebase-config';
import PerfilPaciente from './PerfilPaciente';

function Pacientes({user}) {
    const db = getFirestore(app);
    const [pacientes, setPacientes] = useState([]);
    const [nombrep, setNombrep] = useState(null);
    console.log(user.uid)

useEffect(
        () =>
            onSnapshot(collection(db, 'Citas',user.uid,'citas'), (snapshot) => {
                setPacientes(snapshot.docs.map((doc) => doc.data()))
            }),

        []);

const unicos = [];
Array.prototype.compacta = function(){
    for(var i = 0; i < this.length; i++){
        if(this[i] === undefined){
            this.splice(i , 1);
        }
    }
}
        if(pacientes){
            
            for(var i = 0; i<pacientes.length; i++){
                const elemento = pacientes[i].idPaciente;
                if (!unicos.includes(pacientes[i].idPaciente)) {
                    unicos.push(elemento);
                  }

                  unicos.compacta();

            }
            console.log(unicos); // [1, 2, 3, 4, 5]
        }
    

  return (
    <div><h4>Lista de Pacientes</h4>

        {unicos?.map(paciente=>(
            <div>
                {paciente? <PerfilPaciente perfilPaciente={paciente}/>:null}
            </div>
        ))}
    </div>
  )
}

export default Pacientes