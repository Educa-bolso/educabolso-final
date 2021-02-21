import { useState, useEffect } from 'react';

import { FaPlusCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import RegistroContas from './components/RegistroContas';
import FormularioContas from './components/FormularioContas';

import './styles.css';

import api from '../../services/api';

const Contas = () => {
  const [contas, setContas] = useState([]);

  const formulario = useSelector((state) => state.abrirFormulario);
  const dispatch = useDispatch();

  useEffect(() => {
    async function pegarContas() {
      const response = await api.get('/accounts');

      setContas(response.data);
    }

    pegarContas();
  }, [contas]);

  function abrirFormulario() {
    dispatch({ type: 'ABRIRFORMULARIO' });
  }

  return (
    <>
      <Header />
      <Navigation />

      <section className='conteudo-contas'>
        <div className='contas'>
          <h3 className='contas1'>
            Contas registradas: {contas ? contas.length : '0'}
          </h3>
        </div>

        {contas ? (
          <div className='registro-contas'>
            {contas.map((item) => (
              <RegistroContas
                nome={item.nome}
                valor={item.valor}
                key={item.id}
                id={item.id}
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
