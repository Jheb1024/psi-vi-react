import React from "react";
import "./RegistroPaciente.css";

export function RegistroPaciente(){
    return (        
    <div id="formulario">
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
      <label for="disabledSelect" class="form-label">Dias preferibles para horarios de contacto</label>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck"/>
      <label class="form-check-label" for="disabledFieldsetCheck">
          Lunes
        </label>
        </div>

        <div class="form-check">
        <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck"/>
        <label class="form-check-label" for="disabledFieldsetCheck">
          Martes
        </label>
        </div>

        <div class="form-check">
        <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck"/>
        <label class="form-check-label" for="disabledFieldsetCheck">
          Miercoles
        </label>
        </div>

        <div class="form-check">
        <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck"/>
        <label class="form-check-label" for="disabledFieldsetCheck">
          Jueves
        </label>
        </div>

        <div class="form-check">
        <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck"/>
        <label class="form-check-label" for="disabledFieldsetCheck">
          Viernes
        </label>
        </div>

        <div class="form-check">
        <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck"/>
        <label class="form-check-label" for="disabledFieldsetCheck">
          Sabado
        </label>
        </div>

        <div class="form-check">
        <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck"/>
        <label class="form-check-label" for="disabledFieldsetCheck">
          Domingo
        </label>
        </div>
        
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
        
    );
}