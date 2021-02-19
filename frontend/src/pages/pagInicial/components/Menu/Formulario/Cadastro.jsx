import React from 'react';
import { Formik, Field, Form } from 'formik';
import schemaCadastro from './schemaCadastro';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

import '../styles.css';

import api from '../../../../../services/api';

function Cadastro() {
  const dispatch = useDispatch();

  function fecharFormularioCadastro() {
    dispatch({ type: 'FECHARCADASTRO' });
  }

  const cadastroRealizado = () =>
    toast('Cadastro realizado com sucesso!', {
      position: 'top-right',
      className: 'toast-background',
      autoClose: 3500,
      style: {
        background: '#53b63f',
        color: '#FFF',
      },
      progressStyle: { background: '#7159c1' },
    });

  async function onSubmit(values, actions) {
    try {
      await api.post('/cadastro', values);

      values.nome = '';
      values.email = '';
      values.senha = '';
      values.confirmarSenha = '';

      cadastroRealizado();
      fecharFormularioCadastro();
    } catch (error) {
      const errorNotification = () =>
        toast(`${error.response.data.error}`, {
          position: 'top-right',
          className: 'toast-background',
          autoClose: 2500,
          style: {
            backgroundColor: '#b93737',
            color: '#FFF',
          },
          progressStyle: { background: '#FFF' },
        });
      return errorNotification();
    }
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
          confirmarSenha: '',
        }}
        render={({ values, errors }) => (
          <Form className='formLogin' id='form2'>
            <h2>Cadastro</h2>
            <div className='form-group'>
              <Field
                className='formularios mb-4 mt-2'
                type='text'
                name='nome'
                placeholder='Digite seu Nome'
                required=''
              />
              {errors.nome && <span>{errors.nome}</span>}
              <Field
                className='formularios mb-4 mt-2'
                type='email'
                name='email'
                placeholder='Digite seu Email'
                required=''
              />
              {errors.email && <span>{errors.email}</span>}
              <Field
                className='formularios mb-4 mt-2'
                type='password'
                name='senha'
                placeholder='Digite digite sua Senha'
                required=''
              />
              {errors.senha && <span>{errors.senha}</span>}
              <Field
                className='formularios'
                type='password'
                name='confirmarSenha'
                placeholder='Confirme sua Senha '
                required=''
              />
              {errors.confirmarSenha && <span>{errors.confirmarsenha}</span>}
            </div>
            <input className='botao' type='submit' value='Cadastrar' />
          </Form>
        )}
      />
    </div>
  );
}
export default Cadastro;
