
// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {registro} from "D:/Proyecto/psi-vi-react/psivi-app/src/auth/pacienteFuncionesDB.js";

import "./RegistroPaciente.css";


const Basic = () => (
  <div>
  <Formik
    initialValues={{ email: '', password: '', nombre:'',
    apellidoPaterno:'',
    apellidoMaterno:'',
    edad:'',
    fechaNacimiento:'',
    motivo:'',
    }}
    validate={values => {
      const errors = {};
      if (!values.email|| !values.nombre || !values.apellidoMaterno || !values.apellidoPaterno || !values.edad || !values.fechaNacimiento || !values.motivo) {
        errors.email = 'Correo requerido';
        errors.nombre = 'Nombre requerido';
        errors.apellidoPaterno = 'Apellido requerido';
        errors.apellidoMaterno = 'Apellido requerido';
        errors.edad = 'Edad requerida';
       errors.fechaNacimiento = 'Fecha de nacimiento requerida';
       errors.motivo = 'Motivos requeridos';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email, values.nombre, values.apellidoMaterno, values.apellidoPaterno, values.edad, values.fechaNacimiento, values.motivo)
      ) {
        errors.nombre = 'Nombre no valido';
        errors.email = 'Direccion de correo no valida';
        errors.apellidoPaterno = 'Apellido no valido';
        errors.apellidoMaterno = 'Apellido no valido';
        errors.edad = 'Edad no valida';
       errors.fechaNacimiento = 'Fecha de nacimiento no valido';
       errors.motivo = 'Motivos no validos';
      }
      if (values.password.length < 8) {
        errors.password = "La contraseña es demasiado débil";
      }
      return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {


      registro(values.email, values.password, values.nombre, values.apellidoPaterno, values.apellidoMaterno,
        values.edad, values.fechaNacimiento);
      
    }}
  >

    {({ isSubmitting }) => (
      <Form>
        <br></br><br></br>


        <legend>Registro paciente:</legend>

          <legend>Registro paciente:</legend>
         
          <div className='row'/>
           
              <div class="mb-3">
                <Field type="text" name="nombre" className="form-input" placeholder="Nombre" />
              </div>
              <ErrorMessage name="nombre" component="div" />
              <div class="mb-3">
                <Field type="text" name="apellidoPaterno" className="form-input" placeholder="Apellido Paterno" />
              </div>
              <ErrorMessage name="apellidoPaterno" component="div" />

              <div class="mb-3">
                <Field type="text" name="apellidoMaterno" className="form-input" placeholder="Apellido Materno" />
              </div>
              <ErrorMessage name="apellidoMaterno" component="div" />

              <div class="mb-3">
                <Field type="text" name="edad" className="form-input" placeholder="Edad" />
              </div>
              <ErrorMessage name="edad" component="div" />

              <div class="mb-3">
                <Field type="text" name="fechaNacimiento" className="form-input" placeholder="Fecha Nacimiento" />
              </div>
              <ErrorMessage name="fechaNacimiento" component="div" />

              <div class="mb-3">
                <Field type="email" name="email" className="form-input" placeholder="Correo" />
              </div>
              <ErrorMessage name="email" component="div" />

              <div class="mb-3">
                <Field type="password" name="password"  placeholder="Contraseña" />
              </div>
              <ErrorMessage name="password" component="div" />
              <div class="mb-3">
                <Field name="motivo" type="textarea" placeholder="Motivo Consulta.." rows={4} style={{
                  padding: ".5em",
                  border: "1px solid"
                }} />
              </div>
              <ErrorMessage name="motivo" component="div" />

       
        <div className='row'>
         
            <div class="mb-3">
              <Field type="text" name="nombre" className="form-input" placeholder="Nombre" />
            </div>
            <div class="error">
            <ErrorMessage id= "error" name="nombre" component="div"/>
            </div>
            <div class="mb-3">
              <Field type="text" name="apellidoPaterno" className="form-input" placeholder="Apellido Paterno" />
            </div>
            <div class="error">
            <ErrorMessage name="apellidoPaterno" component="div" />
            </div>

            <div class="mb-3">
              <Field type="text" name="apellidoMaterno" className="form-input" placeholder="Apellido Materno" />
            </div>
            <div class="error">
            <ErrorMessage name="apellidoMaterno" component="div" />
            </div>

            <div class="mb-3">
              <Field type="text" name="edad" className="form-input" placeholder="Edad" />
            </div>
            <div class="error">
            <ErrorMessage name="edad" component="div" />
            </div>

            <div class="mb-3">
              <Field type="text" name="fechaNacimiento" className="form-input" placeholder="Fecha Nacimiento" />
            </div>
            <div class="error">
            <ErrorMessage name="fechaNacimiento" component="div" />
            </div>

            <div class="mb-3">
              <Field type="email" name="email" className="form-input" placeholder="Correo" />
            </div>
            <div class="error">
            <ErrorMessage name="email" component="div" />
            </div>

            <div class="mb-3">
              <Field type="password" name="password"  placeholder="Contraseña" />
            </div>
            <br></br>
            <div class="error">
            <ErrorMessage name="password" component="div" />
            </div>
            <br></br>
            <div class="mb-3">
              <Field name="motivo" type="textarea" placeholder="Motivo Consulta.." rows={4} style={{
                padding: ".5em",
                border: "1px solid"
              }} />
            </div>
            <div class="error">
            <ErrorMessage name="motivo" component="div" />
            </div>
     
          
        </div>
        <button type="submit" disabled={isSubmitting}>
          Registrar
        </button>
      </Form>
    )}
  </Formik>
</div>
);

export default Basic;

