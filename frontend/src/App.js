import { Container } from 'react-bootstrap';

import Routes from './routes';

import './styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Container fluid>
        <Container style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <Routes />
        </Container>
      </Container>
    </>
  );
}

export default App;
