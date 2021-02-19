import React from 'react';
import { Formik, Field, Form } from 'formik';
import schemaCadastro from './schemaCadastro';

import api from '../../../../../services/api';

function Cadastro() {
  async function onSubmit(values, actions) {
    try {
      await api.post('/cadastro', values);

      values.nome = '';
    } catch (error) {
      console.log(error.response.data.error);
    }
  }

    return(
        <div>
            <Formik validationSchema={schemaCadastro} onSubmit={onSubmit} initialValues={{
                nome: '',
                email: '',
                senha: '',
                confirmarSenha: '',
            }} render={({values, errors})=>(
                <Form className="formLogin" id="form2">
                    <h2>Cadastro</h2>
                    <div class="form-group">
                        <Field class="formularios mb-4 mt-2" type="text" name="nome" placeholder="Digite seu Nome" required=""/>
                        {errors.nome &&(
                        <span>{errors.nome}</span>
                    )}
                        <Field class="formularios mb-4 mt-2" type="email" name="email" placeholder="Digite seu Email" required=""/>
                        {errors.email &&(
                        <span>{errors.email}</span>
                    )}
                        <Field class="formularios mb-4 mt-2" type="password" name="senha" placeholder="Digite digite sua Senha" required=""/>
                        {errors.senha &&(
                        <span>{errors.senha}</span>
                    )}
                        <Field class="formularios" type="password" name="confirmarsenha" placeholder=" Confirme sua Senha " required=""/>
                        {errors.confirmarSenha &&(
                        <span>{errors.confirmarsenha}</span>
                    )}
                    </div>
                    <input class="botao" type="submit" value="Cadastrar"/>
                </Form>

            )}/>
        </div>
    );
}
export default Cadastro;
