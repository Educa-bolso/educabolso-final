import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import './styles.css';

const Feedback = () => {
  return (
    <>
      <Header />
      <Navigation />

      <div>
          <section id="formu">
          <form action="" method="POST">
            <label for="feedback" id="texto">Deixe aqui sugestões ou reclamações<br /> para podermos melhorar nossa plataforma!</label><br />
            <textarea className="formulario" id="feedback"></textarea><br />
            <button id="botao" type="submit">Enviar</button>
          </form>
        </section>

      </div>

      <Footer />
    </>
  );
};

export default Feedback;
