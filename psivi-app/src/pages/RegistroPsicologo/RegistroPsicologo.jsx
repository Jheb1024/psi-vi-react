import React from 'react'
import './RegistroPsicologo.css';

function RegistroPsicologo() {
  return (
    <div className='containerRegistro'>
      <form>
        <fieldset >
          <legend>Registro Psicólogo</legend>
          <div className='row'>
            <div className='col'>
              <div class="mb-3">
                <input type="text" id="nombreInput" class="form-control" placeholder="Nombre" />
              </div>
              <div class="mb-3">
                <input type="text" id="apellidoPaternoInput" class="form-control" placeholder="Apellido Paterno" />
              </div>
              <div class="mb-3">

                <input type="text" id="apellidoMaternoInput" class="form-control" placeholder="Apellido Materno" />
              </div>
              <div class="mb-3">
                <input type="text" id="fechaNacimientoInput" class="form-control" placeholder="Fecha de Nacimiento" />
              </div>
              <div class="mb-3">
                <input type="text" id="edadInput" class="form-control" placeholder="Edad" />
              </div>
              <div class="mb-3">
                <input type="text" id="correoInput" class="form-control" placeholder="Correo" />
              </div>
              <div className='mb-3'>
                <input type='text' id='gradoEstudiosInput' className='form-control' placeholder='Grado de estudios'></input>
              </div>
              <div className='mb-3'>
                <input type='text' id='lugarEgresoInput' className='form-control' placeholder='Institución de Egreso (opcional)'></input>
              </div>
            </div>

            <div className='col'>

              
              <div className='mb-3'>
                <input type='text' id='inicioEstudiosInput' className='form-control' placeholder='Inicio de estudios'></input>
                <input type='text' id='finEstudiosInput' className='form-control' placeholder='Fin de estudios'></input>
              </div>
              <div className='mb-3'>
                <input type='text' id='lugarEgresoInput' className='form-control' placeholder='Institución de Egreso (opcional)'></input>
              </div>
              <div class="mb-3">
                <label for="tituloFile">Titulo</label>
                <input type="file" class="form-control-file" id="tituloFile" />
              </div>
         
              <div class="mb-3">
                <label for="cedulaFile">Cedula Profesional</label>
                <input type="file" class="form-control-file" id="cedulaFile" />
              </div>
              <div class="mb-3">
                <textarea class="form-control" id="decisionTextarea" rows="3"></textarea>
                <label for="decisionTextarea" class="form-label">¿Porqué  decidiste ser psicólogo clínico?</label>
              </div>
              <div class="mb-3">
                <label for="ingresarTextarea" class="form-label">¿Porqué quiere ingresar con nosotros?</label>
                <textarea class="form-control" id="ingresarTextarea" rows="3"></textarea>
              </div>

            </div>
          </div>

        </fieldset>
      </form>
    </div>

  )
}

export default RegistroPsicologo