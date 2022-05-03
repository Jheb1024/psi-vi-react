import { React, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Nosotros() {


    return (
        <div className='Nosotros' style={{height: '100vh'}}>
         <br></br>   
         <br></br>
         <h1>PSI-VI </h1>
         <br></br>
         <br></br>

         <Container fluid="md">
        
         <Row className="justify-content-md-center">
             
  <Col md={6} style={{fontWeight: 'bold' , fontSize: '27px'} }>Objetivo: </Col>
  
  </Row>
  <Row className="justify-content-md-center" style={{fontSize: '17px'} }>

  <Col md={8} >{`Brindar servicios psicológicos especializados de forma virtual para personas que busquen una forma diferente y que se adapten a su forma de vida. `}</Col>

  </Row>
  <br></br>
         <br></br>
         <br></br>
         <br></br>
        
        
</Container>

         <Container fluid={true} style={{backgroundColor: '#0C6DFD', color: '#F1ECE2' }}>
        

  <Row>
 
    <Col md={6} style={{fontWeight: 'bold' , fontSize: '27px'} } >  <br></br>Misión:  </Col>
   
   
    <Col md={6} style={{fontWeight: 'bold' , fontSize: '27px'} }>  <br></br>{`Visión:`}</Col>
    
  </Row>
  <Row  style={{fontSize: '17px'} }>
    <Col md={6} >{`Buscar la forma de brindar asesorias psicológicas a personas de habla hispana, utilizando personal profesional que les permita vivir una experiencia completa e integral de acuerdo a sus necesidades. `}</Col>
   
    <Col md={6}>{`Posicionarse como una consultoría relevante y de gran alcance que permita conectar a personas con necesidades psicológicas con psicologos que les ayuden a mejorar su calidad de vida.`}</Col>
  </Row>
  <br></br>
  <br></br>
</Container>

        </div>
    )
}

export default Nosotros