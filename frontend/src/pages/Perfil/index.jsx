import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import './styles.css';

const Perfil = () => {
  return (
    <>
      <Header />
      <Navigation />

      <div class="form-group">
        <div class="formulario">
          <h4 id="titulo" >Meu Perfil</h4>
          <form action="" method="POST">
            <label class="texto" for="nome" >Nome:</label><br />
            <input class="entrada" id="nome" type="text" /><br />
            <label class="texto" for="sobrenome">Sobrenome:</label><br />
            <input class="entrada" id="sobrenome" type="text" /><br />
            <label class="texto" for="email">E-mail:</label><br />
            <input class="entrada" id="email" type="email" /><br />
            <label class="texto" for="endereco">Endereço:</label><br />
            <input class="entrada" id="endereco" type="text" /><br /><br />
            <label class="texto" for="data_nascimento">Data de Nascimento:</label><br />
            <input id="data_nascimento" class="data" type="date" /><br /><br />
            <label class="texto" >Eu trabalho como:</label><br />
            <input type="radio" id="opc1" name="autonomo" value="autonomo" />
            <label class="texto" for="opc1">Autônomo</label><br />
            <input type="radio" id="opc2" name="clt" value="clt" />
            <label class="texto" for="opc2">Regime CLT</label><br />
            <button type="submit" id="botao" >Salvar</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Perfil;
