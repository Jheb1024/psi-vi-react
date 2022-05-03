import { React, useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'; 
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
function Precios() {


    return (
        <div className='Precios' style={{height: '100vh'}}>
            <br></br>
            <br></br>
        <h1>Precios </h1>

<Container fluid={true}>
   <Row> 

      <Col>
      <div className='card text-center m-5 mt-2 mb-5 shadow p-5 mb-5 bg-white rounded' style ={{width: '500px' }} >  
        <div className="card-body">
            <h4 className='card-title'>Cita individual</h4>
            
            <h2 style={{color: '#0C6DFD', fontWeight: 'bold'}}>$449.00 MXN</h2>
            <p>
                Una cita por videollamada de 50 minutos para una persona.
            </p>
           
            <Button className='btn btn-outline-secondary' to='/' style={{color: '#F1ECE2'}}>Agendar cita</Button>
           
        </div>
        </div>
        </Col>

<Col>
<div className='card text-center m-5 mt-2 mb-5 shadow p-5 mb-5 bg-white rounded' style ={{width: '500px'}} >  
        <div className="card-body">
            <h4 className='card-title'>Cita de pareja</h4>
            
            <h2 style={{color: '#0C6DFD', fontWeight: 'bold'}}>$599.00 MXN</h2>
            <p>
                Una cita por videollamada de 50 minutos para dos personas.
            </p>
           
            <Button className='btn btn-outline-secondary' to='/' style={{color: '#F1ECE2'}}>Agendar cita</Button>
           
        </div>
        </div>
        </Col>
    
</Row>
</Container>
</div>
    )
}

export default Precios