import React from 'react'
import EditarPerfil from './EditarPerfil'
import { Card, Button } from 'react-bootstrap'

const PerfilPaciente = ({Perfil, uid})=>{
    return(
        <div className='Perfil'>
            <Card>
  <Card.Header as="h5">Información Personal</Card.Header>
  <Card.Body>
    <Card.Title>Datos</Card.Title>
    <Card.Text>
      <b>Nombre:</b> {Perfil.nombre}
    </Card.Text>
    <Card.Text><b>Apelidos:</b> {Perfil.apellidoPaterno} {Perfil.apellidoMaterno}</Card.Text>
    <Card.Text><b>Edad:</b> {Perfil.edad}</Card.Text>
    <Card.Text><b>Correo:</b> {Perfil.correo}</Card.Text>
  </Card.Body>
</Card>
            

            <div><EditarPerfil Perfil ={Perfil} uid={uid}/></div>
        </div>
    )
}

export default PerfilPaciente