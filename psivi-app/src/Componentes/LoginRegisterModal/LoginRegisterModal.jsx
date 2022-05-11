import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { collection, doc, getFirestore, addDoc, getDoc, setDoc } from "firebase/firestore";
import { app } from '../../auth/firebase-config'

function LoginRegisterModal({ fecha, time, psico, paciente }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const db = getFirestore(app);
    //const citasRef = collection(db, "Citas", "4M28Nl4aPXcUA9yROJsQlkGnwMk2", "citas");

    async function obtenerInfoPaciente(paciente) {
        console.log("paciente desde el lmodal", paciente.uid);
        const docRef = doc(db, "Paciente", paciente.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            const nombre = docSnap.data().nombre;
            return nombre;

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }

    async function registrarCita() {
        console.log(time.split(":"))
        var time2 = time.split(":");
        console.log(time2[0])
        var start = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate(), time2[0], 0, 0);
        start = start.getTime();
        const nombrePaciente = await obtenerInfoPaciente(paciente)
        if (nombrePaciente) {
            await addDoc(collection(db, "Citas", psico.idUser, "citas"), {
                title: 'Sesion Pendiente con ' + nombrePaciente,
                start: start,
                end: start,
                nombrePaciente: nombrePaciente,
                idPaciente: paciente.uid,
                piscologo:psico.nombre+" "+ psico.apellidoPaterno + " " + psico.apellidoMaterno,
                idPsicologo: psico.idUser

            }).then(() => setShow(false))

            await addDoc(collection(db, 'allCitas'),
            {
                title: 'Sesion Pendiente con ' + nombrePaciente,
                start: start,
                end: start,
                nombrePaciente: nombrePaciente,
                idPaciente: paciente.uid,
                piscologo:psico.nombre+" "+ psico.apellidoPaterno + " " + psico.apellidoMaterno,
                idPsicologo: psico.idUser
            }).then(()=>console.log("se insertó el documento de citas"))
        }

    }

    return (
        <>
            <div className="d-grid gap-2">
                <Button size="lg" style={{ backgroundColor: '#38c616' }} onClick={handleShow}>Agendar Cita</Button>
            </div>

            <Modal show={show} onHide={handleClose} animation={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{fecha.toDateString()}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={registrarCita}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default LoginRegisterModal