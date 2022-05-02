import { Modal, Button, Card } from "react-bootstrap";
import { useState } from "react";
import { doc, updateDoc, getFirestore } from "firebase/firestore";
import { app } from "../../auth/firebase-config";
import PsicologoHome from "../Psicologo/PsicologoHome";

export default function Perfil({ psicologo, uid }) {
    const [show, setShow] = useState(false);
    const [perfil, setPerfil] = useState(psicologo);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const db = getFirestore(app);
    async function guardarPerfil() {
        /*console.log("uid from editarpefil : ")
        console.log(uid.uid);
        const docuRef = doc(db, "Paciente", uid.uid);
    
        await updateDoc(docuRef, {
          nombre: perfil.nombre
        });*/
        setShow(false);
    }






    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Ver Perfil
            </Button>

            <Modal show={show} onHide={handleClose} animation={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Perfil del Psicólogo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card>
                        <Card.Body>
                            <Card.Title>Psicologo</Card.Title>
                            <Card.Text>
                             <b>Nombre: </b> {perfil.nombre}
                            </Card.Text>
                            <Card.Text>
                             <b>Apellidos: </b> {perfil.apellidoPaterno} {perfil.apellidoMaterno}
                            </Card.Text>
                            <Card.Text>
                             <b>Correo: </b> {perfil.correo}
                            </Card.Text>
                            <Card.Text>
                             <b>Edad: </b> {perfil.edad}
                            </Card.Text>
                            <Card.Text>
                             <b>Grado de estudios: </b> {perfil.gradoEstudios}
                            </Card.Text>
                            <Card.Text>
                             <b>Institución de egreso: </b> {perfil.institucionEgreso}
                            </Card.Text>
                            
                            

                        </Card.Body>
                    </Card>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}