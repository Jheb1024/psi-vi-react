// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { registro } from "D:/Proyecto/psi-vi-react/psivi-app/src/auth/psicologoFuncionesDB.js";
const Basic = () => (
  <div>

    <Formik
      initialValues={{
        email: '',
        password: '',
        nombre: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        fechaNacimiento: '',
        edad: '',
        gradoEstudios: '',
        institucionEgreso: '',
        inicioEstudios: '',
        finEstudios: '',
        tituloFile: '',
        cedulaFile: '',
        decisionPsicologo: '',
        razonIngreso: ''
      }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if (values.password.length < 8) {
          errors.password = "La contraseña es demasiado débil";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {


        registro(values.email, 
          values.password, 
          values.nombre,
          values.apellidoPaterno,
          values.apellidoMaterno,
          values.edad,
          values.fechaNacimiento,
          values.cedulaFile,
          values.decisionPsicologo,
          values.institucionEgreso,
          values.inicioEstudios,
          values.gradoEstudios,
          values.razonIngreso,
          values.finEstudios,
          values.tituloFile);
       
      }}
    >

      {({ isSubmitting }) => (
        <Form>
          <fieldset >
            <legend>Registro Psicólogo</legend>
            <div className='row'>
              <div className='col'>
                <div class="mb-3">
                  <Field type="text" name="email" className="form-input" placeholder="Correo"/>
                </div>
                <ErrorMessage name="email" component="div"/>
                <div class="mb-3">
                <Field type="password" name="password" placeholder="Contraseña" />
                </div>
                <ErrorMessage name="password" component="div" />
                <div class="mb-3">

                <Field type="text" name="nombre" className="form-input" placeholder="Nombre"/>
                </div>
                <ErrorMessage name="nombre" component="div" />
                <div class="mb-3">
                <Field type="text" name="apellidoPaterno" className="form-input" placeholder="Apellido Paterno" /></div>
                <ErrorMessage name="apellidoPaterno" component="div" />
                <div class="mb-3">
                <Field type="text" name="apellidoMaterno" className="form-input" placeholder="Apellido Materno" /></div>
                <ErrorMessage name="apellidoMaterno" component="div" />
                <div class="mb-3">

                <Field type="date" name="fechaNacimiento" placeholder="Fecha Nacimiento"/>
                </div>
                <ErrorMessage name="fechaNacimiento" component="div" />
                
                <div class="mb-3">
                <Field type="text" name="gradoEstudios" placeholder="Grado de estudios"/></div>
                <ErrorMessage name="gradoEstudios" component="div" />
                <div class="mb-3">

                <Field type="text" name="institucionEgreso"  placeholder="Institución de egreso"/></div>
                <ErrorMessage name="institucionEgreso" component="div" />
              </div>
              <div className='col'>
              <div class="mb-3">
              <label htmlFor='cedulaFile'>Cédula</label><br/>
                <Field type="text" name="cedulaFile" placeholder="12345687"/>
                </div>
                <ErrorMessage name="cedulaFile" component="div" />
                <div class="mb-3">
                <label htmlFor='inicioEstudios'>Inicio de estudios</label><br/>
                <Field type="date" name="inicioEstudios" placeholder="Inicio de estudios"/></div>
                <ErrorMessage name="inicioEstudios" component="div" />
                <div class="mb-3">
                <label htmlFor='finEstudios'>Fin de estudios</label><br/>
                <Field type="date" name="finEstudios" placeholder="Fin de estudios" /></div>
                <ErrorMessage name="finEstudios" component="div" />
                
                <div class="mb-3">
                <Field type="text" name="decisionPsicologo" placeholder="Porque decidiste ser psicólogo?"/></div>
                <ErrorMessage name="decisionPsicologo" component="div" />
                <div class="mb-3">
                <Field type="text" name="razonIngreso" placeholder="Razon de ingreso a nuestra comunidad?" /></div>
                <ErrorMessage name="razonIngreso" component="div" />

                <button class="btn btn-primary" type="submit" disabled={isSubmitting}>
                  Registrarse
                </button>
              </div>

            </div>
          </fieldset>
        </Form>
      )}
    </Formik>
  </div>
);

export default Basic;