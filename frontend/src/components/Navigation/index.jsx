import { Link } from 'react-router-dom';

import './styles.css';

const Navigation = () => {
  return (
    <nav className='navegacao-container'>
      <ul className='navegacao-lista'>
        <li className='navegacao-item'>
          <Link className='navegacao-link active' to='/jogo'>
            Jogo
          </Link>
        </li>
        <li className='navegacao-item'>
          <Link className='navegacao-link' to='/contas'>
            Contas
          </Link>
        </li>
        <li className='navegacao-item'>
          <Link className='navegacao-link' to='saibamais'>
            Saiba Mais
          </Link>
        </li>
        <li className='navegacao-item'>
          <Link className='navegacao-link' to='feedback'>
            Feedback
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
