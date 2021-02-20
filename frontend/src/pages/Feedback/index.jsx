import { Formik, Form, Field } from 'formik';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import Navigation from '../../components/Navigation';

import notification from '../../utils/notification';

import schemaFeed from './schemaFeed';

import './styles.css';

import api from '../../services/api';

const Feedback = () => {
  const history = useHistory();

  async function onSubmit(values, actions) {
    try {
      await api.post('/feedback', values);

      notification({
        titulo: 'Recebemos a sua opinião!!',
        tempo: 2000,
      });

      values.mensagem = '';

      history.push('/jogo');
    } catch (error) {
      notification({
        titulo: `${error.response.data.error}`,
        tempo: 2000,
      });
    }
  }

  return (
    <>
      <Header />
      <Navigation />

      <div>
        <section id='formu'>
          <Formik
            validationSchema={schemaFeed}
            onSubmit={onSubmit}
            initialValues={{
              mensagem: '',
            }}
            render={({ values, errors }) => (
              <Form className='formulario-feedback'>
                <label htmlFor='feedback' id='texto'>
                  Deixe aqui sugestões ou reclamações
                  <br /> para podermos melhorar nossa plataforma!
                </label>
                <br />
                <Field
                  as='textarea'
                  className='input-feedback'
                  id='feedback'
                  name='mensagem'
                />
                <br />
                {errors.mensagem && <span>{errors.mensagem}</span>}
                <button id='botao' type='submit'>
                  Enviar
                </button>
              </Form>
            )}
          />
        </section>
      </div>
    </>
  );
};

export default Feedback;
