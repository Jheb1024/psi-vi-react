import React, { useEffect, useState } from 'react'
import { collectionGroup, query, where, getDocs, getFirestore, collection, onSnapshot } from "firebase/firestore";
import { app } from '../../auth/firebase-config';
import { ListGroup, Container, Row, Col, Stack, Button } from 'react-bootstrap'
import moment from 'moment';
import 'moment/locale/es'

function Calendario({ user }) {
  const db = getFirestore(app);
  const [citasTemp, setCitasTemp] = useState([]);
  const [citas, setCitas] = useState([]);


  useEffect(() =>

    onSnapshot(collection(db, 'allCitas'), (snapshot) => {
      setCitas(snapshot.docs.map((doc) => doc.data()))
    })


    , [])


  return (
    <div>Agenda

      <Container>
        <Row>
          <Col>
            <ListGroup defaultActiveKey="#link1">
            <b>Citas</b>
              {citas?.map(cita => (
                <ListGroup.Item action onClick={()=>setCitasTemp(cita)}>
                <b>Piscologo: </b> {cita.piscologo} <br/>
                <b>Fecha </b> {moment(cita.start).format('MMMM Do YYYY, h:mm:ss a')}
                </ListGroup.Item>
              ))}
            </ListGroup>,
          </Col>
          <Col>
            <h4 className='text-center'>Informacion de cita</h4>
            <div className="div">
              <Stack gap={3}>
                <div className="bg-light border">Evento</div>
                <div className="bg-light">{citasTemp?.title}</div>
                <div className="bg-light border">Hora</div>
                <div className="bg-light">{moment(citasTemp?.start).format('MMMM Do YYYY, h:mm:ss a')}</div>
                <Button variant="secondary" onClick={() => {
                  window.location.href = "https://us04web.zoom.us/j/9511441088?pwd=c0lpY1BVWWl5dXFZcUl1SzVHdEhLUT09";
                }}>Iniciar Sesión</Button>

              </Stack>
            </div>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Calendario