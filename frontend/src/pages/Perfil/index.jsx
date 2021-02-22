import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import { Formik, Field, Form } from 'formik';
import schemaPerfil from './schemaPerfil';

import notification from '../../utils/notification';
import { date } from '../../utils/date';

import './styles.css';

import api from '../../services/api';

const Perfil = () => {
  const [perfil, setPerfil] = useState(true);
  const [usuario, setUsuario] = useState({});

  const history = useHistory();

  const userId = sessionStorage.getItem('@userId');

  useEffect(() => {
    async function pegarUsuario() {
      const user = await api.get('/users');

      setUsuario(user.data);
    }

    pegarUsuario();
  }, [usuario]);

  async function onSubmit(values, actions) {
    try {
      await api.put('/users', values);

      notification({
        titulo: 'Dados cadastrados com sucesso!',
        tempo: 2000,
      });

      setPerfil(true);
    } catch (error) {
      notification({
        titulo: error.response.data.error,
        tempo: 2000,
      });
    }
  }

  async function deletarMinhaConta() {
    const confirme = window.confirm('Você deseja mesmo deletar a sua conta?');

    if (confirme) {
      try {
        await api.delete(`/users/${userId}`);

        notification({
          titulo: 'Conta deletada com sucesso!',
          tempo: 2000,
        });

        sessionStorage.clear();
        history.push('/');
      } catch (error) {
        notification({
          titulo: error.response.data.error,
          tempo: 2000,
        });
      }
    }
  }

  return (
    <>
      <Header />
      <Navigation />
      {perfil ? (
        <>
          <section className='details'>
            <h3 className='title'>Meu perfil</h3>

            <div className='item'>
              <div>Nome</div>
              <div>{usuario.nome}</div>
            </div>
            <div className='item'>
              <div>Sobrenome</div>
              <div>{usuario.sobrenome}</div>
            </div>

            <div className='item'>
              <div>Endereço</div>
              <div>{usuario.endereco}</div>
            </div>

            <div className='item'>
              <div>Data de nascimento</div>
              <div>{date(`${usuario.data_nascimento}`).format}</div>
            </div>

            <div className='item'>
              <div>Tipo de trabalho</div>
              <div>{usuario.tipo_trabalho}</div>
            </div>

            <div className='group-button'>
              <button onClick={() => setPerfil(false)} class='button-editar'>
                Editar
              </button>
              <button
                onClick={() => deletarMinhaConta()}
                className='button-deletar'
              >
                Deletar conta
              </button>
            </div>
          </section>
        </>
      ) : (
        <div className='form-group'>
          <div className='formulario-perfil'>
            <h4 id='titulo'>Meu Perfil</h4>
            <Formik
              validationSchema={schemaPerfil}
              onSubmit={onSubmit}
              initialValues={{
                nome: '' || usuario.nome,
                sobrenome: '' || usuario.sobrenome,
                endereco: '' || usuario.endereco,
                data_nascimento: '',
                tipo_trabalho: '' || usuario.tipo_trabalho,
                userId: userId,
              }}
              render={({ values, errors }) => (
                <Form action='' method='POST'>
                  <label className='texto' htmlFor='nome'>
                    Nome:
                  </label>
                  <br />
                  <Field
                    className='entrada'
                    id='nome'
                    name='nome'
                    type='text'
                  />
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
                  {errors.dataNascimento && (
                    <span>{errors.dataNascimento}</span>
                  )}
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
      )}
    </>
  );
};

export default Perfil;
