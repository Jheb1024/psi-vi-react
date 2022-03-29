import React from 'react'

function RegistroPaciente() {
  return (
    <div id="formulario" style={{display:'flex'}}>
    <form >
  <fieldset>
    <legend>Registro pacientes:</legend>
    <br></br>
    <div class="mb-3">
      <label for="disabledTextInput" class="form-label">Nombre (s):</label>
      <input type="text" id="disabledTextInput" class="form-control" placeholder="Nombre(s):"/>
    </div>

    <div class="mb-3">
      <label for="disabledTextInput" class="form-label">Apellido paterno:</label>
      <input type="text" id="disabledTextInput" class="form-control" placeholder="Apellido paterno:"/>
    </div>

    <div class="mb-3">
      <label for="disabledTextInput" class="form-label">Apellido materno:</label>
      <input type="text" id="disabledTextInput" class="form-control" placeholder="Apellido materno:"/>
    </div>

    <div class="mb-3">
      <label for="disabledTextInput" class="form-label">Edad:</label>
      <input type="text" id="disabledTextInput" class="form-control" placeholder="Edad:"/>
    </div>

    <div class="mb-3">
      <label for="disabledTextInput" class="form-label">Fecha de Nacimiento:</label>
      <input type="text" id="disabledTextInput" class="form-control" placeholder="Fecha de nacimiento:"/>
    </div>

    <div class="mb-3">
      <label for="disabledTextInput" class="form-label">Correo Electronico:</label>
      <input type="text" id="disabledTextInput" class="form-control" placeholder="Correo electronico:"/>
    </div>

    <div class="mb-3">
      <label for="disabledTextInput" class="form-label">Contraseña:</label>
      <input type="text" id="disabledTextInput" class="form-control" placeholder="Contraseña"/>
    </div>

    <div class="mb-3">
      <label for="disabledTextInput" class="form-label">Confirmar contraseña</label>
      <input type="password" id="disabledTextInput" class="form-control" placeholder="Confirmacion"/>
    </div>

    <div class="mb-3">
      <label for="disabledTextInput" class="form-label">Motivo de consulta:</label>
      <input type="text" id="disabledTextInput" class="form-control" placeholder="Motivos opcionales"/>
    </div>

    <div class="mb-3">
    <select class="form-select" aria-label="Default select example">
  <option selected>Días preferibles de contacto</option>
  <option value="1">Lunes</option>
  <option value="2">Martes</option>
  <option value="3">Miercoles</option>
  <option value="3">Jueves</option>
  <option value="3">Sábado</option>
  <option value="3">Domingo</option>
</select>
        
    </div>
    
    
    <div class="mb-3">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck"/>
        <label class="form-check-label" for="disabledFieldsetCheck">
          Acepto aviso de privacidad 
        </label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Registrarme</button>
  </fieldset>
</form>
    </div>
  )
}

export default RegistroPaciente