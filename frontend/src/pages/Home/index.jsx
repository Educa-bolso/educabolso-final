import { useSelector } from 'react-redux';

import Header from '../../components/Header';
import Card from '../../components/Card';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

import Feedback from './components/Feedback';
import CardMain from './components/CardMain';
import SaibaMais from './components/SaibaMais';

import conteudoCards from '../../conteudoCards';

import './styles.css';
import { useState } from 'react';

const Home = () => {
  /*const [saibaMais, setSaibaMais] = useState(true);*/

  const saibaMais = useSelector((state) => state.saibaMaisReducer);

  return (
    <>
      <Header />
      <Navigation />

      <CardMain />

      <h5>Fases</h5>
      <section className='cards'>
        {conteudoCards.map((item) => (
          <Card
            key={item.id}
            fase={item.fase}
            titulo={item.titulo}
            descricao={item.descricao}
            bloqueado={item.bloqueado}
          />
        ))}
      </section>

      <Feedback />

      {saibaMais && <SaibaMais />}

      <Footer />
    </>
  );
};

export default Home;
