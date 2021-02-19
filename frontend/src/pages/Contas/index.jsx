import {FaPlusCircle} from 'react-icons/fa'; 

import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import RegistroContas from './components/RegistroContas';
import FormularioContas from './components/FormularioContas';

import './styles.css';

const Contas = () => {
  return (
    <>
      <Header />
      <Navigation />

      <section className="conteudo-contas">
        <div className='contas'>
          <h3 className='contas1'>Contas registradas: 11</h3>
          <h3 className='contas2'>Gasto mensal: R$ 200,00</h3>
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

           <FormularioContas/>
           <button className="incluir"><FaPlusCircle size={25} color="#7159c1"/></button>
         </section>
      <Footer />
    </>
  );
};

export default Contas;
