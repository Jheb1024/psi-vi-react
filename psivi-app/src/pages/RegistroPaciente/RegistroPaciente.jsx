// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {registro} from "D:/Proyecto/psi-vi-react/psivi-app/src/auth/pacienteFuncionesDB.js";
const Basic = () => (
  <div>
<Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Direccion de correo invalida';
         }
         if(values.password.length < 8){
           errors.password = "La contraseña es demasiado débil";
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {


        registro(values.email, values.password);
         /*setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);*/
       }}
     >
       
       {({ isSubmitting }) => (
         <Form>
           <br></br><br></br>
          
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
      <input type="email" name="email" class="form-control" placeholder="Correo electronico:"/>
    </div>
          
           <ErrorMessage name="email" component="div" />

           <div class="mb-3">
      <label for="disabledTextInput" class="form-label">Contraseña:</label>
      <input type="password" name="password" class="form-control" placeholder="Contraseña"/>
    </div>
           
           <ErrorMessage name="password" component="div" />

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
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}
     </Formik>
   </div>
 );
 
 export default Basic;

