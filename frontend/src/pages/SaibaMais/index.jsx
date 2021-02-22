import Header from '../../components/Header';
import Navigation from '../../components/Navigation';

import CardReferencia from './components/CardReferencia';

import book from '../../assets/books.svg';
import browser from '../../assets/browser.svg';

import './styles.css';

const SaibaMais = () => {
  return (
    <>
      <Header />
      <Navigation />

      <h4 className='titulo-referencia'>Cadernos</h4>

      <div className='cards-container-referencia'>
        <CardReferencia
          titulo='Viver bem com o dinheiro que se tem'
          imagem={book}
          acesso='http://portal.mec.gov.br/index.php?option=com_docman&view=download&alias=6012-caderno3-educando-cidadania&Itemid=30192'
        />

        <CardReferencia
          titulo='Gestão das Finanças pessoais'
          imagem={book}
          acesso='https://www.bcb.gov.br/content/cidadaniafinanceira/documentos_cidadania/Cuidando_do_seu_dinheiro_Gestao_de_Financas_Pessoais/caderno_cidadania_financeira.pdf'
        />
      </div>

      <h4 className='titulo-referencia'>Sites</h4>
      <div className='cards-container-referencia'>
        <CardReferencia
          titulo='Serasa Educação Financeira'
          imagem={browser}
          cor='#50BC22'
          corButton='#7159c1'
          acesso='https://www.serasa.com.br/ensina/curso-ead-financas-trilha-financeira/'
        />
        <CardReferencia
          titulo='Como organizar o orçamento familiar - FGV'
          imagem={browser}
          cor='#50BC22'
          corButton='#7159c1'
          acesso='https://educacao-executiva.fgv.br/cursos/online/curta-media-duracao-online/como-organizar-o-orcamento-familiar'
        />
      </div>

      <h4 className='titulo-referencia'>Canais do Youtube</h4>
      <div className='cards-container-referencia'>
        <CardReferencia
          titulo='NoFront - Empoderamento Financeiro'
          imagem={book}
          cor='#9E8FD2'
          acesso='https://youtube.com/c/NoFrontEmpoderamentoFinanceiro'
        />
        <CardReferencia
          titulo='GUETONOMIA'
          imagem={book}
          cor='#9E8FD2'
          acesso='https://youtube.com/playlist?list=PLJ85jmdKU96JIZjV6Rpbc1ZidaClDdnpF'
        />
      </div>
    </>
  );
};

export default SaibaMais;
