import { Nav } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Nav className='navegacao' variant='pills' defaultActiveKey='/home'>
      <Nav.Item>
        <Nav.Link className='links' href='/'>
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='links' href='/contas'>
          Contas
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='links' href='#'>
          Saiba mais
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navigation;
