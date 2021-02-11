import './styles.css';

import orcamentoImg from '../../assets/image-orcamento.svg';

const Card = ({ fase, titulo, descricao, bloqueado, caminho }) => {
  return (
    <a href={caminho}>
      <div
        className='container-card'
        style={bloqueado && { opacity: 0.7, cursor: 'none' }}
      >
        <img src={orcamentoImg} alt='' />

        <h5>
          {fase}: <span>{titulo}</span>
        </h5>

        <p>{descricao}</p>
      </div>
    </a>
  );
};

export default Card;
