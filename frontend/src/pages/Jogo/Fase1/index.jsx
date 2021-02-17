import { useState } from 'react';

import { Link } from 'react-router-dom';
import { FaChevronLeft, FaWindowClose } from 'react-icons/fa';
import { GoRuby } from 'react-icons/go';

import Header from '../../../components/Header';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';

import dadosQuestoes from '../../../questions';

import './styles.css';

const Fase1 = () => {
  const calculoPorcentagem = 100 / dadosQuestoes.length;

  const [questaoAtual, setQuestaoAtual] = useState(0);
  const [barraProgresso, setBarraProgresso] = useState(0);
  const [pontos, setPontos] = useState(0);
  const [respostaCorreta, setRespostaCorreta] = useState(false);
  const [respostaIncorreta, setRespostaIncorreta] = useState(false);

  function manipulandoResposta(resposta, e) {
    setBarraProgresso(barraProgresso + calculoPorcentagem);

    if (resposta) {
      e.target.classList.add('correta');
      setPontos(pontos + 1);
      setRespostaCorreta(true);
    } else {
      e.target.classList.add('incorreta');
      setRespostaIncorreta(true);
    }

    let proximaQuestao = questaoAtual + 1;

    if (proximaQuestao < dadosQuestoes.length) {
      setTimeout(() => {
        setQuestaoAtual(proximaQuestao);
        setRespostaCorreta(false);
        setRespostaIncorreta(false);
      }, 1000);
    } else {
      alert('Questões finalizadas');
    }
  }

  return (
    <>
      <Header />
      <Navigation />

      <div className='section-header'>
        <div className='header-top'>
          <Link to='/jogo'>
            <FaChevronLeft size={20} color='fff' />
          </Link>
          <p>Fase 1: ORÇAMENTO</p>
          <p>
            {pontos}
            <GoRuby size={30} color='var(--secundary-color)' />
          </p>
        </div>

        <span>
          <div className='barra-progresso'>
            <div
              className='level-progresso'
              style={{ width: `${barraProgresso}%` }}
            ></div>
          </div>
          <div className='numero-questoes'>
            {questaoAtual + 1}/{dadosQuestoes.length}
          </div>
        </span>
      </div>

      <div className='section-respostas'>
        <p>{dadosQuestoes[questaoAtual].questionTitle}</p>

        {dadosQuestoes[questaoAtual].answerOptions.map((answerData) => (
          <button
            key={answerData.answer}
            onClick={(e) => manipulandoResposta(answerData.isCorrect, e)}
          >
            {answerData.answer}
          </button>
        ))}
      </div>

      {respostaCorreta && (
        <div className='resposta-correta-container'>
          <div className='resposta-correta'>
            <h1>Parabéns você acertou!!</h1>
          </div>
        </div>
      )}

      {respostaIncorreta && (
        <div className='resposta-correta-container'>
          <div className='resposta-correta incorreta'>
            <h4>Poxa, você não acertou :(</h4>

            <p>
              A questão fala sobre a importância de ter uma reserva financeira,
              e a reserva está relacionada a quantidade de dinheiro que
              acumulamos durante um período de 12 meses.
            </p>

            <p>
              <span>A resposta correta é:</span> Acúmulo de receita por um ano.
            </p>

            <Link>
              <FaWindowClose size={30} color='#888' />
            </Link>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Fase1;
