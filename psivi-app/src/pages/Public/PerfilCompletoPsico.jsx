import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link, useLocation, } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './PerfilCompletoPsico.css'
import LoginRegisterModal from '../../Componentes/LoginRegisterModal/LoginRegisterModal';
import Time from '../../Componentes/Schedule/Time';

function PerfilCompletoPsico() {
    const location = useLocation();
    console.log(location, " useLocation Hook");
    const psico = location.state?.data;
    const [date, setDate] = useState(new Date());
    const [showTime, setShowTime] = useState(false) 


    return (
        <div>
            <br></br>
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="2">
                        (FOTO)
                    </Col>
                    <Col xs={6} >
                        <h3>Perfil</h3>
                        <Card style={{ alignItems: 'left' }}>

                            <Card.Body style={{ textAlign: 'left' }}>
                                <Card.Title>{psico.nombre} {psico.apellidoPaterno} {psico.apellidoMaterno}</Card.Title>
                                <Card.Text>
                                    {psico.decisionPsicologo}

                                </Card.Text>
                                <Card.Text>
                                    Areas:
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs lg="3">
                        <h3 className='text-center'>Agenda tu cita</h3>
                        <div className='calendar-container'>
                            <Calendar onChange={setDate} value={date} onClickDay={()=>setShowTime(true)}/>
                        </div>
                        <p className='text-center'>
                            <span className='blod'>Fecha seleccionada: </span>
                            {date.toDateString()}
                        </p>
                        {/**Aqui debemos assegurarnos si estálogueado entonces agenda la cita y hace el pago 
                         *si no, entonces tiene que registrarse...
                        */}
                        <Time showTime={showTime} date={date}></Time>
                        
                        
                    </Col>
                    
                    
                </Row>
            </Container>
        </div>

    )
}

export default PerfilCompletoPsico