import { useEffect, useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { FaChevronLeft, FaWindowClose } from 'react-icons/fa';
import { GoRuby } from 'react-icons/go';

import notification from '../../../utils/notification';

import Header from '../../../components/Header';
import Navigation from '../../../components/Navigation';

import dadosQuestoes from '../../../questions';

import '../Fase1/styles.css';

import api from '../../../services/api';

const Fase1 = () => {
  const [questoes, setQuestoes] = useState([]);
  const [questaoAtual, setQuestaoAtual] = useState(0);
  const [barraProgresso, setBarraProgresso] = useState(0);
  const [pontos, setPontos] = useState(0);
  const [respostaCorreta, setRespostaCorreta] = useState(false);
  const [respostaIncorreta, setRespostaIncorreta] = useState(false);

  const [feedback, setFeedback] = useState('');
  const [textoRespostaCorreta, setTextoRespostaCorreta] = useState('');

  const user_id = sessionStorage.getItem('@userId');
  const calculoPorcentagem = 100 / questoes.length;

  const history = useHistory();

  useEffect(() => {
    async function pegarQuestoes() {
      const response = await api.get('/questions/2');

      setQuestoes(response.data);
    }

    pegarQuestoes();
  }, []);

  function fecharFeedbackQuestao() {
    setRespostaIncorreta(false);

    if (questaoAtual < dadosQuestoes.length) {
      setQuestaoAtual(questaoAtual + 1);
    }
  }

  function manipulandoResposta(resposta, textoFeedback, textoResposta) {
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
        setFeedback(textoFeedback);
        setTextoRespostaCorreta(textoResposta);

        setTimeout(() => {
          setQuestaoAtual(questaoAtual + 1);
          setRespostaIncorreta(false);
        }, 3000);
      }
    }
  }

  async function voltarParaHome() {
    try {
      await api.post('/score', {
        user_id,
        score: pontos,
      });

      notification({
        titulo: 'Pontos cadastrados!',
        tempo: 2000,
      });

      history.push('/jogo');
    } catch (error) {
      notification({
        titulo: error.response.data.error,
        tempo: 2000,
      });
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
          <p>Fase 2: CRÉDITO</p>
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
            {questaoAtual}/{questoes.length}
          </div>
        </span>
      </div>

      <div className='section-respostas'>
        {questaoAtual < questoes.length ? (
          <>
            <p>{questoes[questaoAtual].pergunta}</p>

            {questoes[questaoAtual].respostas.map((resposta) => {
              return (
                <button
                  className='resposta-button'
                  key={resposta.id}
                  onClick={(e) =>
                    manipulandoResposta(
                      resposta.correta,
                      resposta.feedback,
                      resposta.resposta_correta
                    )
                  }
                >
                  {resposta.resposta}
                </button>
              );
            })}
          </>
        ) : (
          <div className='final-fase-container'>
            <div className='final-fase-conteudo'>
              <h3>Parabéns por ter chegado até aqui!!</h3>
              <h4>
                Você acertou {pontos > 1 ? `${pontos} questões!` : '1 questão!'}
              </h4>

              <button
                onClick={() => voltarParaHome()}
                className='final-fase-button'
              >
                voltar
              </button>
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

            <p>{feedback}</p>

            <p>
              <span>A resposta correta é:</span> {textoRespostaCorreta}
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
