import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';

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
          <h1>A educação financeira</h1>

          <button onClick={() => fecharSaibaMais()}>
            <AiOutlineCloseCircle size={30} color='#000' />
          </button>
        </div>

        <p>makmsaksmakmska</p>
        <p>jaisjaisjaisjiajs</p>
      </div>
    </main>
  );
};

export default SaibaMais;
