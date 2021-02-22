import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import './styles.css';

const SaibaMais = () => {
  const dispatch = useDispatch();

  function fecharSaibaMais() {
    dispatch({ type: 'FECHARSAIBAMAIS', value: false });
  }

  return (
    <main className='saiba-mais-container'>
      <div className='saiba-mais'>
        <div className='saiba-mais-header'>
          <h2>A educaçao financeira ...</h2>

          <button onClick={() => fecharSaibaMais()}>
            <AiOutlineCloseCircle size={30} color='#000' />
          </button>
        </div>

        <p>
          Nos faz entender a forma como lidamos com o nosso dinheiro, mostrando
          que não basta apenas controlar a entrada e saída dele, mas que se deve
          controlar o lado emocional e impulsivo de consumir alguns produtos.
        </p>
        <p>
          Foca na nossa capacidade de criar metas, traçar sonhos e objetivos com
          o intuito de alcançá-los, mostrando que para isso, é preciso
          resiliência na hora de gastar. Por exemplo, quando queremos trocar de
          celular sem necessidade, este é um dos casos em que a mudança de
          hábitos adquirido pelo acesso a uma educação financeira, entra em
          ação, mostrando o quanto essa atitude irá impactar seu orçamento a
          longo prazo.
        </p>

        <span>
          Quer ir além no assunto?{' '}
          <Link to='/saibamais'>Clique na referência aqui!</Link>
        </span>
      </div>
    </main>
  );
};

export default SaibaMais;
