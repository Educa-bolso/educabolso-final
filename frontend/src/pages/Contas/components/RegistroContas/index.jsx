import notification from '../../../../utils/notification';

import iconLixeira from '../../../../assets/lixeira.svg';
import './style.css';

import api from '../../../../services/api';

const RegistroContas = ({ nome, valor, id }) => {
  async function deletarConta(id) {
    try {
      await api.delete(`/accounts/${id}`);

      notification({
        titulo: 'Conta deletada!',
        tempo: 2000,
      });
    } catch (error) {
      notification({
        titulo: error.response.data.error,
        tempo: 2000,
      });
    }
  }

  return (
    <article>
      <div class='card' style={{ background: '#9159C1' }}>
        <button onClick={() => deletarConta(id)} className='lixeira-button'>
          <img style={{ width: '15px' }} src={iconLixeira} alt='' />
        </button>
        <h2>{nome}</h2>
        <p>R$ {valor}/ mês</p>
      </div>
    </article>
  );
};

export default RegistroContas;
