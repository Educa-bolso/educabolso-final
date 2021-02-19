import React from 'react';
import { Formik, Field, Form } from 'formik';
import schemaCadastro from './schemaCadastro';

function Cadastro() {
  function onSubmit(values, actions) {
    console.log('SUBMIT', values);
  }

  return (
    <div>
      <Formik
        validationSchema={schemaCadastro}
        onSubmit={onSubmit}
        initialValues={{
          nome: '',
          email: '',
          senha: '',
          confirmarsenha: '',
        }}
        render={({ values, errors }) => (
          <Form id='form2' action='' method='POST'>
            <h2>Cadastro</h2>
            <div class='form-group'>
              <Field
                class='form-control mb-4 mt-2'
                type='text'
                name='nome'
                placeholder='Digite seu Nome'
                required=''
              />
              {errors.nome && <span>{errors.nome}</span>}
              <Field
                class='form-control mb-4 mt-2'
                type='email'
                name='email'
                placeholder='Digite seu Email'
                required=''
              />
              {errors.email && <span>{errors.email}</span>}
              <Field
                class='form-control mb-4 mt-2'
                type='password'
                name='senha'
                placeholder='Digite digite sua Senha'
                required=''
              />
              {errors.senha && <span>{errors.senha}</span>}
              <Field
                class='form-control'
                type='password'
                name='confirmarsenha'
                placeholder=' Confirme sua Senha '
                required=''
              />
              {errors.confirmarsenha && <span>{errors.confirmarsenha}</span>}
            </div>
            <input id='button' class='botao' type='submit' value='Cadastrar' />
          </Form>
        )}
      />
    </div>
  );
}
export default Cadastro;
