import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import store from './store';

import Routes from './routes';

import './styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Container fluid style={{ height: '100vh' }}>
        <Container
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
          }}
        >
          <Provider store={store}>
            <Routes />
            <ToastContainer />
          </Provider>
        </Container>
      </Container>
    </>
  );
}

export default App;
