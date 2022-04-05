
 // Render Prop
 import React from 'react';
 import { Formik, Form, Field, ErrorMessage } from 'formik';
 import {registro} from "D:/Proyecto/psi-vi-react/psivi-app/src/auth/psicologoFuncionesDB.js";
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
           errors.email = 'Invalid email address';
         }
         if(values.password.length < 8){
           errors.password = "La contraseña es demasiado débil";
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {

// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { registro } from "C:/Users/jhan_/Documents/PsiVi_react/psi-vi-react/psivi-app/src/auth/psicologoFuncionesDB.js";
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



        registro(values.email, values.password);
        /*setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);*/
      }}
    >

      {({ isSubmitting }) => (
        <Form>
          <fieldset >
            <legend>Registro Psicólogo</legend>
            <div className='row'>
              <div className='col'>
                <div class="mb-3">
                  <Field type="email" name="email" />
                </div>
                <ErrorMessage name="email" component="div" />
                <div class="mb-3">
                <Field type="password" name="password" />
                </div>
                <ErrorMessage name="password" component="div" />
                <div class="mb-3">

                <Field type="nombre" name="nombre" />
                </div>
                <ErrorMessage name="nombre" component="div" />
                <div class="mb-3">
                <Field type="apellidoPaterno" name="apellidoPaterno" /></div>
                <ErrorMessage name="apellidoPaterno" component="div" />
                <div class="mb-3">
                <Field type="apellidoMaterno" name="apellidoMaterno" /></div>

                <ErrorMessage name="apellidoMaterno" component="div" />
                <div class="mb-3">

                <Field type="fechaNacimiento" name="fechaNacimiento" /></div>
                <ErrorMessage name="fechaNacimiento" component="div" />

                <div class="mb-3">

                <Field type="edad" name="edad" /></div>
                <ErrorMessage name="edad" component="div" />
                <div class="mb-3">

                <Field type="gradoEstudios" name="gradoEstudios" /></div>
                <ErrorMessage name="gradoEstudios" component="div" />
                <div class="mb-3">

                <Field type="institucionEgreso" name="institucionEgreso" /></div>
                <ErrorMessage name="institucionEgreso" component="div" />
              </div>
              <div className='col'>
              <div class="mb-3">
                <Field type="inicioEstudios" name="inicioEstudios" /></div>
                <ErrorMessage name="inicioEstudios" component="div" />
                <div class="mb-3">
                <Field type="finEstudios" name="finEstudios" /></div>
                <ErrorMessage name="finEstudios" component="div" />
                <div class="mb-3">
                <Field type="tituloFile" name="tituloFile" /></div>
                <ErrorMessage name="tituloFile" component="div" />
                <div class="mb-3">
                <Field type="cedulaFile" name="tituloFile" /></div>
                <ErrorMessage name="cedulaFile" component="div" />
                <div class="mb-3">
                <Field type="decisionPsicologo" name="decisionPsicologo" /></div>
                <ErrorMessage name="decisionPsicologo" component="div" />
                <div class="mb-3">
                <Field type="razonIngreso" name="razonIngreso" /></div>
                <ErrorMessage name="razonIngreso" component="div" />

                <button type="submit" disabled={isSubmitting}>
                  Submit
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