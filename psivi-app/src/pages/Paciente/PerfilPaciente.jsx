import React from 'react'
import EditarPerfil from './EditarPerfil'

const PerfilPaciente = ({Perfil, uid})=>{
    return(
        <div className='Perfil'>
            {Perfil.nombre}
            <div><EditarPerfil Perfil ={Perfil} uid={uid}/></div>
        </div>
    )
}

export default PerfilPaciente