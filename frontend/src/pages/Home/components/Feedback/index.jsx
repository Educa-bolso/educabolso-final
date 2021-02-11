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

        <a href='/feedback'>Sugerir!</a>
      </div>
    </>
  );
};

export default Feedback;
