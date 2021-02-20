import { FaPlusCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import RegistroContas from './components/RegistroContas';
import FormularioContas from './components/FormularioContas';

import './styles.css';

const contas = [
  {
    id: 1,
    nome: 'Luz',
    valor: '50,00',
  },
  {
    id: 2,
    nome: 'Água',
    valor: '60,00',
  },
  {
    id: 3,
    nome: 'Internet',
    valor: '100,00',
  },
];

const Contas = () => {
  const formulario = useSelector((state) => state.abrirFormulario);
  const dispatch = useDispatch();

  function abrirFormulario() {
    dispatch({ type: 'ABRIRFORMULARIO' });
  }

  return (
    <>
      <Header />
      <Navigation />

      <section className='conteudo-contas'>
        <div className='contas'>
          <h3 className='contas1'>Contas registradas: 0</h3>
          <h3 className='contas2'>Gasto mensal: R$ 0,00</h3>
        </div>

        {contas ? (
          <div className='registro-contas'>
            {contas.map((item) => (
              <RegistroContas
                nome={item.nome}
                valor={item.valor}
                key={item.id}
              />
            ))}
          </div>
        ) : (
          <span className='nenhum-cadastro'>
            <p>Nenhuma conta cadastrada!</p>
          </span>
        )}

        {formulario && <FormularioContas />}
        <button onClick={() => abrirFormulario()} className='incluir'>
          <FaPlusCircle size={35} color='#7159c1' />
        </button>
      </section>
    </>
  );
};

export default Contas;
