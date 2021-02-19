import React from 'react';
import { Link } from 'react-router-dom';
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
                <Form className="formLogin" id="form1">
                <h2>Login</h2>
                <div className="form-group">
                    <Field className="formularios mb-4 mt-4" type="email" name="email"  placeholder="Digite seu Email" required="" />
                    {errors.email &&(
                        <span>{errors.email}</span>
                    )}
                    <Field className="formularios" type="password" name="senha"  placeholder="Digite sua Senha" required=""  />
                    {errors.senha &&(
                        <span>{errors.senha}</span>
                    )}
                </div>
                <Link to="/jogo" className="botao" type="submit">Entrar</Link>
            </Form>
            )}/>
        </div>
    );
}
export default Login;