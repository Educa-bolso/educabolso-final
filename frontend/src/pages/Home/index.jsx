import { Container, Nav } from 'react-bootstrap';
import Header from '../../components/Header';
import Card from '../../components/Card';

import './styles.css';

const Home = () => {
  return (
    <Container fluid>
      <Container style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <Header />

        <Nav className='navegacao' variant='pills' defaultActiveKey='/home'>
          <Nav.Item>
            <Nav.Link className='links' href='/'>
              Contas
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='links' href='#'>
              Saiba mais
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <main className='card-conteudo'>
          <h4>Educação Financeira</h4>

          <p>
            Saiba como a educação financeira pode te ajudar a entender como você
            lida com o seu dinheiro!
          </p>

          <p>Você já se perguntou, eu preciso mesmo comprar este produto?</p>

          <button>Saiba mais</button>
        </main>

        <section className='cards'>
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </Container>
    </Container>
  );
};

export default Home;
