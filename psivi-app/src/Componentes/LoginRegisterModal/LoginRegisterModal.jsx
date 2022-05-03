import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { collection, doc, getFirestore,addDoc } from "firebase/firestore";
import {app} from '../../auth/firebase-config'

function LoginRegisterModal({fecha, time}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const db = getFirestore(app);
    const citasRef = collection(db, "Citas", "4M28Nl4aPXcUA9yROJsQlkGnwMk2", "citas");

    async function registrarCita(){
        console.log(time.split(":"))
        var time2=time.split(":");
        console.log(time2[0])
        var start = new Date(fecha.getFullYear(),fecha.getMonth(),fecha.getDate(),time2[0],0,0);
        start = start.getTime();
        const docRef = await addDoc(collection(db, "Citas", "4M28Nl4aPXcUA9yROJsQlkGnwMk2", "citas"), {
            title: 'Sesion Pendiente 5',
            start: start,
            end: start
          });
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