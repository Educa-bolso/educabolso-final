import './styles.css';

const CardReferencia = ({ titulo, imagem, acesso, cor, corButton }) => {
  return (
    <div className='card-referencia' style={{ backgroundColor: cor }}>
      <div className='card-referencia-conteudo'>
        <h2>{titulo}</h2>

        <img src={imagem} alt='' />
      </div>

      <a
        href={acesso}
        className='link-referencia'
        style={{ backgroundColor: corButton }}
        target='_blank'
        rel='noreferrer'
      >
        Acesse aqui
      </a>
    </div>
  );
};

export default CardReferencia;
