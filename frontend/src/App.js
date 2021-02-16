import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import store from './store';

import Routes from './routes';

import './styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Container fluid>
        <Container style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <Provider store={store}>
            <Routes />
          </Provider>
        </Container>
      </Container>
    </>
  );
}

export default App;
