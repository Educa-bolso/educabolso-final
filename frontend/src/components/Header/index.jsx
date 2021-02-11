import { useState, useEffect } from 'react';

import './styles.css';

import avatarImg from '../../assets/avatar.svg';

const Header = () => {
  const [saudacao, setSaudacao] = useState('');

  useEffect(() => {
    let horaDoDia = new Date().getHours();

    if (horaDoDia >= 1 && horaDoDia < 12) {
      setSaudacao('Bom dia');
    } else if (horaDoDia >= 12 && horaDoDia <= 18) {
      setSaudacao('Boa tarde');
    } else {
      setSaudacao('Boa noite');
    }
  }, []);

  return (
    <header className='header-container'>
      <span>Educabolso</span>

      <div className='nome-saudacao'>
        <span>{saudacao}</span>
        <h2>Caio Rodrigues</h2>
      </div>

      <img src={avatarImg} alt='Caio Rodrigues' />
    </header>
  );
};

export default Header;
