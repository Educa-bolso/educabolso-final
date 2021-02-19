import React from 'react';
import { Formik, Field, Form } from 'formik';
import schema from './schema';

import api from '../../../../../services/api';

function Login() {
  async function onSubmit(values, actions) {
    try {
      console.log('SUBMIT', values);
      const response = await api.post('/login', values);

      console.log(response.data.token);
    } catch (error) {
      console.log(error.response.data.error);
    }
  }

  return (
    <div>
      <Formik
        validationSchema={schema}
        onSubmit={onSubmit}
        initialValues={{
          email: '',
          senha: '',
        }}
        render={({ values, errors }) => (
          <Form id='form1'>
            <h2>Login</h2>
            <div class='form-group'>
              <Field
                class='form-control mb-4 mt-4'
                type='email'
                name='email'
                placeholder='Digite seu Email'
                required=''
              />
              {errors.email && <span>{errors.email}</span>}
              <Field
                class='form-control'
                type='password'
                name='senha'
                placeholder='Digite sua Senha'
                required=''
              />
              {errors.senha && <span>{errors.senha}</span>}
            </div>
            <input id='button' class='botao' type='submit' value='Entrar' />
          </Form>
        )}
      />
    </div>
  );
}
export default Login;
