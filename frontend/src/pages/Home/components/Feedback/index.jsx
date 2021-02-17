import { Link } from 'react-router-dom';
import './styles.css';

const Feedback = () => {
  return (
    <>
      <h5 className='feedback-title'>Feedback</h5>

      <div className='feedback-container'>
        <p>
          Deixe aqui reclamações ou sugestões <br />
          para a nossa plataforma!
        </p>

        <Link to='/feedback'>Sugerir!</Link>
      </div>
    </>
  );
};

export default Feedback;
