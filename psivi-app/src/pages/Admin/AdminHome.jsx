import React, { useEffect, useState } from 'react'
import { Table, Button } from 'react-bootstrap';
import { getFirestore, collection, onSnapshot, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';
import Perfil from './DetallePerfilPsicologo';

function AdminHome({ ID }) {

  const [listaPsicologos, setListaPsicologos] = useState([]);
  const [uidPsicologo, setUidPsicologo] = useState(null);
  const db = getFirestore();
  console.log(listaPsicologos)
  useEffect(
    () =>
      onSnapshot(collection(db, 'Psicologo'), (snapshot) => {
        setListaPsicologos(snapshot.docs.map((doc) => doc.data()))
      }),

    []);

  const deletePsicology = async (uid) => {
    await deleteDoc(doc(db, "Psicologo", uid)).then(() => {
      console.log("El usuario se ha eliminado");
    }).catch((e) => {
      console.log("Ha ocurrido un problema al eliminar", e.message);
    })
  }
const getUidPsicology = async (correo) => {

    var resp;
      console.log("Psicologo a eliminar: ", correo);
      const q = query(collection(db, "Psicologo"), where("correo", "==", correo));

      const querySnapshot = await getDocs(q);
      if(querySnapshot){
        querySnapshot.forEach((docPsico) => {
        console.log("id desde el admin", docPsico.id, "---");
        //Recuperamos el uid del psicólogo y luego lo pasamos al usestate
        resp = docPsico.id;
      });
      }
      return resp;
      
    }
  const eliminar = async(correo) => {
    await getUidPsicology(correo).then((resp)=>{
      deletePsicology(resp);
    })

  }



  return (
    <div>AdminHome

      <div className='table_psicologos'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>Correo</th>
            </tr>
          </thead>
          <tbody>
            {listaPsicologos.map((psico) =>

            (<tr>

              <td>{psico.nombre}</td>
              <td>{psico.apellidoPaterno} {psico.apellidoMaterno}</td>
              <td>{psico.correo}</td>
              <td><Perfil psicologo={psico} /></td>
              <td><Button variant="outline-primary" onClick={() => { eliminar(psico.correo) }}>Eliminar</Button></td>
            </tr>
            ))}
          </tbody>
        </Table>
      </div>

    </div>
  )
}

export default AdminHome