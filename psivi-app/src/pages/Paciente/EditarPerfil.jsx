import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { doc, updateDoc, getFirestore} from "firebase/firestore";
import { app } from "../../auth/firebase-config";

export default function EditarPerfil({ Perfil , uid}) {
  const [show, setShow] = useState(false);
  const [perfil, setPerfil] = useState(Perfil);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const db = getFirestore(app);
  async function guardarPerfil(){
    console.log("uid from editarpefil : ")
    console.log(uid.uid);
    const docuRef = doc(db, "Paciente", uid.uid);

    await updateDoc(docuRef, {
      nombre: perfil.nombre,
      apellidoPaterno: perfil.apellidoPaterno,
      apellidoMaterno: perfil.apellidoMaterno,
      edad: perfil.edad,
      correo : perfil.correo

    });
     setShow(false);
  }






  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Editar Perfil
      </Button>

      <Modal show={show} onHide={handleClose} animation={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>Editar perfil</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div><input id="nombre" name="nombre" value={perfil.nombre} onChange={(e) => setPerfil({ ...perfil, nombre: e.target.value })}></input>
          </div>
          <div><input id="Apellido Paterno" name="nombre" value={perfil.apellidoPaterno} onChange={(e) => setPerfil({ ...perfil, apellidoPaterno: e.target.value })}></input>
          </div>
          <div><input id="Apellido Materno" name="nombre" value={perfil.apellidoMaterno} onChange={(e) => setPerfil({ ...perfil, apellidoMaterno: e.target.value })}></input>
          </div>
          <div><input id="Edad" name="nombre" value={perfil.edad} onChange={(e) => setPerfil({ ...perfil, edad: e.target.value })}></input>
          </div>
           <div><input id="Correo" name="nombre" value={perfil.correo} onChange={(e) => setPerfil({ ...perfil, correo: e.target.value })}></input>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={guardarPerfil}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
