import { useState } from 'react';

import { Link } from 'react-router-dom';
import { FaChevronLeft, FaWindowClose } from 'react-icons/fa';
import { GoRuby } from 'react-icons/go';

import Header from '../../../components/Header';
import Navigation from '../../../components/Navigation';

import dadosQuestoes from '../../../questions';

import './styles.css';
import questions from '../../../questions';

const Fase1 = () => {
  const calculoPorcentagem = 100 / dadosQuestoes.length;

  const [questaoAtual, setQuestaoAtual] = useState(0);
  const [barraProgresso, setBarraProgresso] = useState(0);
  const [pontos, setPontos] = useState(0);
  const [respostaCorreta, setRespostaCorreta] = useState(false);
  const [respostaIncorreta, setRespostaIncorreta] = useState(false);

  function fecharFeedbackQuestao() {
    setRespostaIncorreta(false);

    if (questaoAtual < dadosQuestoes.length) {
      setQuestaoAtual(questaoAtual + 1);
    }
  }

  function manipulandoResposta(resposta) {
    setBarraProgresso(barraProgresso + calculoPorcentagem);

    if (questaoAtual < dadosQuestoes.length) {
      if (resposta) {
        setPontos(pontos + 1);
        setRespostaCorreta(true);

        setTimeout(() => {
          setQuestaoAtual(questaoAtual + 1);
          setRespostaCorreta(false);
        }, 1000);
      } else {
        setRespostaIncorreta(true);

        setTimeout(() => {
          setQuestaoAtual(questaoAtual + 1);
          setRespostaIncorreta(false);
        }, 3000);
      }
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
            {questaoAtual}/{dadosQuestoes.length}
          </div>
        </span>
      </div>

      <div className='section-respostas'>
        {questaoAtual < dadosQuestoes.length ? (
          <>
            <p>{dadosQuestoes[questaoAtual].questionTitle}</p>

            {dadosQuestoes[questaoAtual].answerOptions.map((answerData) => (
              <button
                className='resposta-button'
                key={answerData.answer}
                onClick={(e) => manipulandoResposta(answerData.isCorrect, e)}
              >
                {answerData.answer}
              </button>
            ))}
          </>
        ) : (
          <div className='final-fase-container'>
            <div className='final-fase-conteudo'>
              <h3>Parabéns por ter chegado até aqui!!</h3>
              <h4>
                Você acertou {pontos > 1 ? `${pontos} questões!` : '1 questão!'}
              </h4>

              <button className='final-fase-button'>voltar</button>
            </div>
          </div>
        )}
      </div>

      {respostaCorreta && (
        <div className='resposta-correta-container'>
          <div className='resposta-correta'>
            <h1>Parabéns você acertou!!</h1>
          </div>
        </div>
      )}

      {respostaIncorreta && (
        <div className='resposta-incorreta-container'>
          <div className='resposta-incorreta'>
            <h4>Poxa, você não acertou :(</h4>

            <p>
              A questão fala sobre a importância de ter uma reserva financeira,
              e a reserva está relacionada a quantidade de dinheiro que
              acumulamos durante um período de 12 meses.
            </p>

            <p>
              <span>A resposta correta é:</span> Acúmulo de receita por um ano.
            </p>

            <button onClick={() => fecharFeedbackQuestao()}>
              <FaWindowClose size={30} color='#888' />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Fase1;
