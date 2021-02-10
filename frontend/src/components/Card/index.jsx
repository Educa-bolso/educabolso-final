import './styles.css';

import orcamentoImg from '../../assets/image-orcamento.svg';

const Card = () => {
  return (
    <div className='container-card'>
      <img src={orcamentoImg} alt='' />

      <h5>
        FASE 1: <span>ORÇAMENTO</span>
      </h5>

      <p>Planejar para depois gastar é um hábito que é preciso exercitar!</p>
    </div>
  );
};

export default Card;
