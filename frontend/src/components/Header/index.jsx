import './styles.css';

import avatarImg from '../../assets/avatar.svg';

const Header = () => {
  return (
    <header className='header-container'>
      <span>Educabolso</span>

      <div className='nome-saudacao'>
        <span>Bom dia</span>
        <h2>Caio Rodrigues</h2>
      </div>

      <img src={avatarImg} alt='Caio Rodrigues' />
    </header>
  );
};

export default Header;
