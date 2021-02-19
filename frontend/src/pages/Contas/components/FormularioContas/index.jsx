import {FaRegWindowClose} from 'react-icons/fa'; 
import { Form } from 'react-bootstrap';
import {useDispatch} from 'react-redux';

import './styles.css';

const FormularioContas = () => {
    const dispatch = useDispatch()
    function fecharFormulario(){
        dispatch({type:"FECHARFORMULARIO", value: false})
    }
    return ( 
        <main>
            <Form className='formulario'>
                <button onClick={()=> fecharFormulario()} className="fechar"><FaRegWindowClose size={25} color="#888888" /></button>  
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