import { useState } from 'react';

import { Link } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import { GoRuby } from 'react-icons/go';
import { CgRadioCheck, CgCheckO } from 'react-icons/cg';

import Header from '../../../components/Header';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';

import dataQuestions from '../../../questions';

import './styles.css';

const Fase1 = () => {
  const calcBarPorcent = 100 / dataQuestions.length;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [barProgress, setBarProgress] = useState(0);
  const [checked, setChecked] = useState(false);

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
            8
            <GoRuby size={30} color='var(--secundary-color)' />
          </p>
        </div>
        <span>
          <div className='bar-progress'>
            <div
              className='level-progress'
              style={{ width: `${barProgress}%` }}
            ></div>
          </div>
          <div className='numbers-questions'>
            {currentQuestion + 1}/{dataQuestions.length}
          </div>
        </span>
      </div>
      <div className='section-answers'>
        <p>{dataQuestions[currentQuestion].questionTitle}</p>

        {dataQuestions[currentQuestion].answerOptions.map((answerData) => (
          <button key={answerData.answer}>
            {answerData.answer}
            {checked ? <CgCheckO size={20} /> : <CgRadioCheck size={20} />}
          </button>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Fase1;
