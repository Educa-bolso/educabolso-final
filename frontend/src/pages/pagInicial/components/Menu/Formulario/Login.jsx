import React from 'react';
import {Formik, Field, Form} from 'formik';
import schema from './schema';

function Login(){
    function onSubmit(values, actions){
        console.log('SUBMIT', values);

    }

    return(
        <div>
            <Formik validationSchema={schema} onSubmit={onSubmit} initialValues={{
                email: '',
                senha: '',
            }} render={({values, errors})=>(
                <Form id="form1">
                <h2>Login</h2>
                <div class="form-group">
                    <Field class="form-control mb-4 mt-4" type="email" name="email"  placeholder="Digite seu Email" required="" />
                    {errors.email &&(
                        <span>{errors.email}</span>
                    )}
                    <Field class="form-control" type="password" name="senha"  placeholder="Digite sua Senha" required=""  />
                    {errors.senha &&(
                        <span>{errors.senha}</span>
                    )}
                </div>
                <input  id="button" class="botao" type="submit" value="Entrar"/>
            </Form>
            )}/>
        </div>
    );
}
export default Login;