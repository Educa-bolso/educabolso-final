import { Form } from 'react-bootstrap';

import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import RegistroContas from '../../components/RegistroContas';
import './styles.css';

const Contas = () => {
  return (
    <>
      <Header />
      <Navigation />

      <section>
        <div className='contas'>
          <h3 className='contas1'>Contas registradas: 11</h3>
          <h3>Gasto mensal: R$ 200,00</h3>
        </div>

        <div className='registro-contas'>
          <RegistroContas />
          <RegistroContas />
          <RegistroContas />
          <RegistroContas />
          <RegistroContas />
          <RegistroContas />
          <RegistroContas />
          <RegistroContas />
        </div>

        <span className='nenhum-cadastro'>
          <p>Nenhuma conta cadastrada!</p>
        </span>

        <main>
          <Form className='formulario'>
            <p>X</p>
            <Form.Group controlId='formBasicText'>
              <Form.Label>Conta:</Form.Label>
              <Form.Control className='input-form' type='text' />
            </Form.Group>
            <Form.Group controlId='formBasicText'>
              <Form.Label>Valor:</Form.Label>
              <Form.Control className='input-form' type='text' />
            </Form.Group>
            <button id='button' type='submit'>
              Cadastrar
            </button>
          </Form>
        </main>
      </section>

      <Footer />
    </>
  );
};

export default Contas;
