import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Formik, Form } from 'formik';
import schemaFeed from './schemaFeed';
import './styles.css';

const Feedback = () => {
  function onSubmit(values, actions) {}
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
              msg: '',
            }}
            render={({ values, errors }) => (
              <Form>
                <label for='feedback' id='texto'>
                  Deixe aqui sugestões ou reclamações
                  <br /> para podermos melhorar nossa plataforma!
                </label>
                <br />
                <textarea
                  className='formulario-feedback'
                  id='feedback'
                  name='msg'
                ></textarea>
                <br />
                {errors.msg && <span>{errors.msg}</span>}
                <button id='botao' type='submit'>
                  Enviar
                </button>
              </Form>
            )}
          />
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Feedback;
