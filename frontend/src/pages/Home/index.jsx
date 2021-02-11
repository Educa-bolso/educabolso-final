import Header from '../../components/Header';
import Card from '../../components/Card';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

import Feedback from './components/Feedback';

import conteudoCards from '../../conteudoCards';

import './styles.css';

const Home = () => {
  return (
    <>
      <Header />
      <Navigation />

      <main className='card-conteudo'>
        <h4>Educação Financeira</h4>

        <p>
          Saiba como a educação financeira pode te ajudar a entender como você
          lida com o seu dinheiro!
        </p>

        <p>Você já se perguntou, eu preciso mesmo comprar este produto?</p>

        <button>Saiba mais</button>
      </main>

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

      <Footer />
    </>
  );
};

export default Home;
