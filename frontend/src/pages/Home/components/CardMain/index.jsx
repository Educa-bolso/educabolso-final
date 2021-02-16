import { useDispatch } from 'react-redux';

import './styles.css';

const CardMain = () => {
  const dispatch = useDispatch();

  function abrirSaibaMais() {
    dispatch({ type: 'ABRIRSAIBAMAIS', value: true });
  }

  return (
    <main className='card-conteudo'>
      <h4>Educação Financeira</h4>

      <p>
        Saiba como a educação financeira pode te ajudar a entender como você
        lida com o seu dinheiro!
      </p>

      <p>Você já se perguntou, eu preciso mesmo comprar este produto?</p>

      <button onClick={() => abrirSaibaMais()}>Saiba mais</button>
    </main>
  );
};

export default CardMain;
