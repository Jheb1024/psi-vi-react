import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { registro } from "C:/Users/jhan_/Documents/PsiVi_react/psi-vi-react/psivi-app/src/auth/pacienteFuncionesDB.js";

const RegistroPaciente = () => (



  <div>
    <Formik
      initialValues={{ email: '', password: '', nombre:'',
      apellidoPaterno:'',
      apellidoMaterno:'',
      edad:'',
      fechaNacimiento:'',
      }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Direccion de correo invalida';
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
          <br></br>
          <br />
          <div className='row'>
           
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
       
            
          </div>
          <button type="submit" disabled={isSubmitting}>
            Registrar
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default RegistroPaciente;