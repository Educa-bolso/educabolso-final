import {FaRegWindowClose} from 'react-icons/fa'; 
import { Form } from 'react-bootstrap';

import './styles.css';

const FormularioContas = () => {
    return ( 
        <main>
            <Form className='formulario'>
                <button className="fechar"><FaRegWindowClose size={25} color="#888888" /></button>  
            <Form.Group controlId='formBasicText'>
                <Form.Label className="form-descricao">Conta:</Form.Label>
                <Form.Control className='input-form' type='text' />
            </Form.Group>
            <Form.Group controlId='formBasicText'>
                <Form.Label className="form-descricao">Valor:</Form.Label>
                <Form.Control className='input-form' type='text' />
            </Form.Group>
                <button id='button' type='submit'>
                    Cadastrar
                </button>
            </Form>

        </main>
    );
};

export default FormularioContas;