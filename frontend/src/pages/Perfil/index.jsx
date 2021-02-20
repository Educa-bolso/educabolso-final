import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import { Formik, Field, Form } from 'formik';
import schemaPerfil from './schemaPerfil';
import './styles.css';

import api from '../../services/api';

const Perfil = () => {
  const userId = sessionStorage.getItem('@userId');

  async function onSubmit(values, actions) {
    try {
      console.log(values);
      const response = await api.put('/users', values);

      console.log(response);
    } catch (error) {
      console.log(error.response.data.error);
    }
  }

  return (
    <>
      <Header />
      <Navigation />
      <div className='form-group'>
        <div className='formulario-perfil'>
          <h4 id='titulo'>Meu Perfil</h4>
          <Formik
            validationSchema={schemaPerfil}
            onSubmit={onSubmit}
            initialValues={{
              nome: '',
              sobrenome: '',
              endereco: '',
              data_nascimento: '',
              tipo_trabalho: '',
              userId: userId,
            }}
            render={({ values, errors }) => (
              <Form action='' method='POST'>
                <label className='texto' htmlFor='nome'>
                  Nome:
                </label>
                <br />
                <Field className='entrada' id='nome' name='nome' type='text' />
                <br />
                {errors.nome && <span>{errors.nome}</span>}
                <br />

                <label className='texto' htmlFor='sobrenome'>
                  Sobrenome:
                </label>
                <br />
                <Field
                  className='entrada'
                  id='sobrenome'
                  name='sobrenome'
                  type='text'
                />
                <br />
                {errors.sobrenome && <span>{errors.sobrenome}</span>}
                <br />

                <label className='texto' htmlFor='endereco'>
                  Endereço:
                </label>
                <br />
                <Field
                  className='entrada'
                  id='endereco'
                  name='endereco'
                  type='text'
                />
                <br />
                <br />
                {errors.endereco && <span>{errors.endereco}</span>}
                <br />
                <label className='texto' htmlFor='data_nascimento'>
                  Data de Nascimento:
                </label>
                <br />
                <Field
                  id='data_nascimento'
                  className='data'
                  name='data_nascimento'
                  type='date'
                />
                <br />
                <br />
                {errors.dataNascimento && <span>{errors.dataNascimento}</span>}
                <br />
                <label className='texto'>Eu trabalho como:</label>
                <br />
                <Field
                  type='radio'
                  id='opc1'
                  name='tipo_trabalho'
                  value='autonomo'
                />
                <label className='texto' htmlFor='opc1'>
                  Autônomo
                </label>
                <br />
                {errors.autonomo && <span>{errors.autonomo}</span>}
                <br />
                <Field
                  type='radio'
                  id='opc2'
                  name='tipo_trabalho'
                  value='clt'
                />
                <label className='texto' htmlFor='opc2'>
                  Regime CLT
                </label>
                <br />
                {errors.clt && <span>{errors.clt}</span>}
                <br />

                <Field name='userId' type='hidden' value={userId} />

                <button type='submit' id='botao'>
                  Salvar
                </button>
              </Form>
            )}
          />
        </div>
      </div>
    </>
  );
};

export default Perfil;
