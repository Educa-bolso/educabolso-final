import { useState, useEffect } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';

import './styles.css';

import avatarImg from '../../assets/avatar.svg';

import logoImg from '../../assets/logo-inicial.svg';

const Header = () => {
  const dispatch = useDispatch();

  const nome = sessionStorage.getItem('@userNome');

  const [saudacao, setSaudacao] = useState('');

  function toggleCaixaProfile() {
    dispatch({ type: 'TOGGLECAIXA' });
  }

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
    <>
      <header className='header-content'>
        <img
          src={logoImg}
          alt='Logo Educabolso'
          style={{
            maxWidth: '50px',
            width: '100%',
            minHeight: '50px',
            height: '100%',
          }}
        />

        <div className='nome-saudacao'>
          <span>{saudacao}</span>
          <h2>{nome}</h2>
        </div>

        <div>
          <img src={avatarImg} alt='Caio Rodrigues' />
          <button onClick={() => toggleCaixaProfile()} className='botao-perfil'>
            <RiArrowDownSLine size={25} color='#888' />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
