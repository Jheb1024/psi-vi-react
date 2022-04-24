import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
function LoginRegisterModal() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="d-grid gap-2">
                <Button size="lg" style={{ backgroundColor: '#38c616' }} onClick={handleShow}>Agendar Cita</Button>
            </div>

            <Modal show={show} onHide={handleClose} animation={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Editar perfil</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary">
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default LoginRegisterModal