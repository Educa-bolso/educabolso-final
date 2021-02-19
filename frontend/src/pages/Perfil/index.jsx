import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Formik, Field, Form } from 'formik';
import schemaPerfil from './schemaPerfil';
import './styles.css';

const Perfil = () => {
  function onSubmit(values, actions){

  }

  return (
    <>
      <Header />
      <Navigation />
      <div class="form-group">
        <div class="formulario">
          <h4 id="titulo" >Meu Perfil</h4>
          <Formik validationSchema={schemaPerfil} onSubmit={onSubmit} initialValues={{
              nome: '',
              sobrenome: '',
              email: '',
              endereco: '',
              dataNascimento: '',
              autonomo: '',
              clt: '',

            }} render={({values, errors})=>(
          <Form action="" method="POST">
            <label class="texto" for="nome" >Nome:</label><br />
            <Field class="entrada" id="nome" name="nome" type="text" /><br/>
            {errors.nome &&(
              <span>{errors.nome}</span>
            )}<br/>

            <label class="texto" for="sobrenome">Sobrenome:</label><br />
            <Field class="entrada" id="sobrenome" name="sobrenome" type="text" /><br />
            {errors.sobrenome &&(
              <span>{errors.sobrenome}</span>
            )}<br/>
            <label class="texto" for="email">E-mail:</label><br />
            <Field class="entrada" id="email" name="email" type="email" /><br />
            {errors.email &&(
              <span>{errors.email}</span>
            )}<br/>
            <label class="texto" for="endereco">Endereço:</label><br />
            <Field class="entrada" id="endereco" name="endereco" type="text" /><br /><br />
            {errors.endereco &&(
              <span>{errors.endereco}</span>
            )}<br/>
            <label class="texto" for="data_nascimento">Data de Nascimento:</label><br />
            <Field id="data_nascimento" class="data" name="dataNascimento" type="date" /><br /><br />
            {errors.dataNascimento &&(
              <span>{errors.dataNascimento}</span>
            )}<br/>
            <label class="texto" >Eu trabalho como:</label><br />
            <Field type="radio" id="opc1" name="autonomo" value="autonomo" />
            <label class="texto" for="opc1">Autônomo</label><br />
            {errors.autonomo &&(
              <span>{errors.autonomo}</span>
            )}<br/>
            <Field type="radio" id="opc2" name="clt" value="clt" />
            <label class="texto" for="opc2">Regime CLT</label><br />
            {errors.clt &&(
              <span>{errors.clt}</span>
            )}<br/>
            <button type="submit" id="botao" >Salvar</button>
          </Form>
           )}/>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Perfil;
