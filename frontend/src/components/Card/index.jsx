import { Link } from 'react-router-dom';

import './styles.css';

import orcamentoImg from '../../assets/image-orcamento.svg';

const Card = ({ fase, titulo, descricao, bloqueado, caminho }) => {
  return (
    <Link
      className='card-link-container'
      to={caminho ? `/jogo/${caminho}` : '/jogo'}
    >
      <div className='container-card' style={bloqueado && { opacity: 0.8 }}>
        <img src={orcamentoImg} alt='' />

        <h5>
          {fase}: <span>{titulo}</span>
        </h5>

        <p>{descricao}</p>
      </div>
    </Link>
  );
};

export default Card;
