import { Nav } from 'react-bootstrap';

const Navigation = () => {
  /*const links = document.querySelectorAll('.nav-link');

  for (let link of links) {
    if (window.location.pathname.includes(link.getAttribute('href'))) {
      link.classList.add('button_active');
    }
  }*/

  function activeFunction(e) {
    e.setAttribute('active');
  }

  return (
    <Nav className='navegacao' variant='pills' defaultActiveKey='/home'>
      <Nav.Item>
        <Nav.Link className='links' onClick={activeFunction} href='/'>
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='links' href='/contas'>
          Contas
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='links' href='/saibamais'>
          Saiba mais
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navigation;
