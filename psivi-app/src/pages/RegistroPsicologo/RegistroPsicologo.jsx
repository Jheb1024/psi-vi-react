
 // Render Prop
 import React from 'react';
 import { Formik, Form, Field, ErrorMessage } from 'formik';
 import {registro} from "D:/Proyecto/psi-vi-react/psivi-app/src/auth/pacienteFuncionesDB.js";

 import Swal from 'sweetalert2'



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
      if (!values.email ) {
        errors.email = 'Correo requerido';
        errors.nombre = 'Nombre requerido';
        errors.apellidoMaterno = 'Apellido requerido';
        errors.apellidoPaterno = 'Apellido requerido';
        errors.fechaNacimiento= 'Fecha de nacimiento requerida';
        errors.edad='Edad requerida';
        errors.gradoEstudios = 'Grado requerido';
        errors.institucionEgreso = 'Institucion requerida';
        errors.inicioEstudios = "Fecha requerida";
        errors.finEstudios = 'Fecha requerida';
        //errors.tituloFile = "Documento requerido";
        //errors.cedula = 'Documento requerido';
        errors.decisionPsicologo = "Campo requerido";
        errors.razonIngreso = "Campo requerido;"

        //Swal.Fire;



      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email, values.nombre, values.apellidoMaterno, values.apellidoPaterno, values.fechaNacimiento, values.edad, values.gradoEstudios, values.institucionEgreso, values.inicioEstudios, values.finEstudios, values.decisionPsicologo, values.razonIngreso)
      ) {
        errors.email = 'Correo no valido';
        errors.nombre = 'Nombre no valido';
        errors.apellidoMaterno = 'Apellido no valido';
        errors.apellidoPaterno = 'Apellido no valido';
        errors.fechaNacimiento= 'Fecha de nacimiento no valido';
        errors.edad='Edad no valida';
        errors.gradoEstudios = 'Grado no valido';
        errors.institucionEgreso = 'Institucion no valida';
        errors.inicioEstudios = "Fecha no valida";
        errors.finEstudios = 'Fecha no valida';
        //errors.tituloFile = "Documento no valido";
        //errors.cedulaFile = 'Documento no valido';
        errors.decisionPsicologo = "Campo no valido";
        errors.razonIngreso = "Campo no valido";

      

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
              <div class="error">
              <ErrorMessage name="email" component="div"/>
              </div>
              <div class="mb-3">
              <Field type="password" name="password" placeholder="Contraseña" />
              </div>
              <div class="error">
              <ErrorMessage name="password" component="div" />
              </div>
              <div class="mb-3">

              <Field type="text" name="nombre" className="form-input" placeholder="Nombre"/>
              </div>
              <div class="error">
              <ErrorMessage name="nombre" component="div" />
              </div>
              <div class="mb-3">
              <Field type="text" name="apellidoPaterno" className="form-input" placeholder="Apellido Paterno" /></div>
              <div class="error">
              <ErrorMessage name="apellidoPaterno" component="div" />
              </div>
              <div class="mb-3">
              <Field type="text" name="apellidoMaterno" className="form-input" placeholder="Apellido Materno" /></div>
              <div class="error">
              <ErrorMessage name="apellidoMaterno" component="div" />
              </div>
              <div class="mb-3">

              <Field type="date" name="fechaNacimiento" placeholder="Fecha Nacimiento"/>
              </div>
              <div class="error">
              <ErrorMessage name="fechaNacimiento" component="div" />
              </div>
              
              <div class="mb-3">
              <Field type="text" name="gradoEstudios" placeholder="Grado de estudios"/></div>
              <div class="error">
              <ErrorMessage name="gradoEstudios" component="div" />
              </div>
              <div class="mb-3">

              <Field type="text" name="institucionEgreso"  placeholder="Institución de egreso"/></div>
              <div class="error">
              <ErrorMessage name="institucionEgreso" component="div" />
              </div>
            </div>
            <div className='col'>
            <div class="mb-3">
              <label htmlFor='inicioEstudios'>Inicio de estudios</label><br/>
              <Field type="date" name="inicioEstudios" placeholder="Inicio de estudios"/></div>
              <div class="error">
              <ErrorMessage name="inicioEstudios" component="div" />
              </div>
              <div class="mb-3">
              <label htmlFor='finEstudios'>Fin de estudios</label><br/>
              <Field type="date" name="finEstudios" placeholder="Fin de estudios" /></div>
              <div class="error">
              <ErrorMessage name="finEstudios" component="div" />
              </div>
              
              <div class="mb-3">
              <Field type="text" name="decisionPsicologo" placeholder="Porque decidiste ser psicólogo?"/></div>
              <div class="error">
              <ErrorMessage name="decisionPsicologo" component="div" />
              </div>
              <div class="mb-3">
              <Field type="text" name="razonIngreso" placeholder="Razon de ingreso a nuestra comunidad?" /></div>
              <div class="error">
              <ErrorMessage name="razonIngreso" component="div" />

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