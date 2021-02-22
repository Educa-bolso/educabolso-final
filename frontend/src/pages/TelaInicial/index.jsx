import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from 'react-modal';
import Cadastro from '../pagInicial/components/Menu/Formulario/Cadastro';
import Login from '../pagInicial/components/Menu/Formulario/Login';

import './styles.css';

import backgroundImage from '../../assets/background-imagem.svg';
import porcoImg from '../../assets/porco-imagem.svg';
import logoImg from '../../assets/logo-inicial.svg';
import jogoImg from '../../assets/jogo-imagem.svg';
import calculadoraImg from '../../assets/calculadora-imagem.svg';

const TelaInicial = () => {
  const [modalIsOpenLogin, setModalIsOpenLogin] = useState(false);
  const dispatch = useDispatch();

  const modal = useSelector((state) => state.formularioCadastroReducer);

  /*const [modalIsOpen, setModalIsOpen] = useState(false);*/

  function abrirModal() {
    dispatch({ type: 'ABRIRCADASTRO' });
  }

  function fecharModal() {
    dispatch({ type: 'FECHARCADASTRO' });
  }

  return (
    <>
      <div className='container-tela-inicial'>
        <header className='tela-inicial-header'>
          <img className='logo-imagem-inicial' src={logoImg} alt='Logo' />

          <div className='links-tela-inicial'>
            <button
              className='button-tela-inicial primeiro'
              onClick={() => setModalIsOpenLogin(true)}
            >
              Login
            </button>
            <div>
              <Modal isOpen={modalIsOpenLogin}>
                <div>
                  <button
                    id='fechar'
                    onClick={() => setModalIsOpenLogin(false)}
                  >
                    X
                  </button>
                </div>

                <Login />
              </Modal>
            </div>
            <button
              onClick={() => abrirModal()}
              className='button-tela-inicial'
            >
              Cadastro
            </button>
            <div>
              <Modal isOpen={modal}>
                <div>
                  <button id='fechar' onClick={() => fecharModal()}>
                    X
                  </button>
                </div>
                <Cadastro />
              </Modal>
            </div>
          </div>
        </header>

        <main className='conteudo-principal-tela-inicial'>
          <div>
            <h1>Já pensou como a educação financeira pode mudar a sua vida?</h1>
            <p>
              O EducaBolso te derá acesso a um conteúdo de educação financeira
              para que você possa rever os seus hábitos financeiros, melhorando
              diretamente sua qualidade de vida e realizar seus sonhos.{' '}
            </p>
          </div>

          <img
            className='imagem-tela-inicial'
            src={backgroundImage}
            alt='Background'
          />
        </main>

        <section className='cards-tela-inicial'>
          <div className='card-tela-inicial'>
            <img src={calculadoraImg} alt='' />
            <h3>Aprenda sobre educação financeira de uma forma divertida</h3>
          </div>
          <div className='card-tela-inicial'>
            <img src={jogoImg} alt='' />
            <h3>Através de um jogo de perguntas e respostas</h3>
          </div>
          <div className='card-tela-inicial'>
            <img src={porcoImg} alt='' />
            <h3>
              Onde você pode ganhar ou perder moedas, e troca-lás por benefícios
              no jogo.
            </h3>
          </div>
        </section>

        <div className='contato-tela-inicial'>
          <p>
            Fale conosco: <span>educabolso1@gmail.com</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default TelaInicial;
