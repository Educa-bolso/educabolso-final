import iconLixeira from '../../../../assets/lixeira.svg';
import './style.css';

const RegistroContas = ({nome, valor}) => {
  return (
    <article>
      <div class='card' style={{ background: '#9159C1' }}>
        <img style={{ width: '15px' }} src={iconLixeira} alt='' />
        <h2>{nome}</h2>
        <p>R$ {valor}/ mês</p>
        <button>Editar</button>
      </div>
    </article>
  );
};

export default RegistroContas;
