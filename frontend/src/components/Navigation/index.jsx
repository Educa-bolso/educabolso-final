import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Navigation = () => {
  const [pathname, setPathname] = useState('');

  useEffect(() => {
    setPathname(window.location.pathname);
  }, [pathname]);

  return (
    <nav className='navegacao-container'>
      <ul className='navegacao-lista'>
        <li className='navegacao-item'>
          <Link
            className={`navegacao-link ${pathname === '/jogo' ? 'active' : ''}`}
            to='/jogo'
          >
            Jogo
          </Link>
        </li>
        <li className='navegacao-item'>
          <Link
            className={`navegacao-link ${
              pathname === '/contas' ? 'active' : ''
            }`}
            to='/contas'
          >
            Contas
          </Link>
        </li>
        <li className='navegacao-item'>
          <Link
            className={`navegacao-link ${
              pathname === '/saibamais' ? 'active' : ''
            }`}
            to='saibamais'
          >
            Saiba Mais
          </Link>
        </li>
        <li className='navegacao-item'>
          <Link
            className={`navegacao-link ${
              pathname === '/feedback' ? 'active' : ''
            }`}
            to='feedback'
          >
            Feedback
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
