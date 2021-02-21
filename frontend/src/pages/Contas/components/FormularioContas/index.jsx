import { FaRegWindowClose } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';

import schemaFormulario from './schemaFormulario';

import './styles.css';

import api from '../../../../services/api';
import notification from '../../../../utils/notification';

const FormularioContas = () => {
  const userId = sessionStorage.getItem('@userId');

  const dispatch = useDispatch();

  function fecharFormulario() {
    dispatch({ type: 'FECHARFORMULARIO' });
  }

  async function onSubmit(values, actions) {
    try {
      await api.post('/accounts', values);

      notification({
        titulo: 'Conta cadastrada!',
        tempo: 2000,
      });
      fecharFormulario();
    } catch (error) {
      notification({
        titulo: error.response.data.error,
        tempo: 2000,
      });
    }
  }
  return (
    <main>
      <Formik
        validationSchema={schemaFormulario}
        onSubmit={onSubmit}
        initialValues={{
          nome: '',
          valor: '',
          user_id: userId,
        }}
        render={({ values, errors }) => (
          <Form method='POST' className='formulario-contas'>
            <button onClick={() => fecharFormulario()} className='fechar'>
              <FaRegWindowClose size={25} color='#888888' />
            </button>

            <label className='form-descricao' htmlFor='nome'>
              Conta:
            </label>
            <Field className='input-form' id='nome' name='nome' type='text' />
            {errors.nome && <span>{errors.nome}</span>}
            <label className='form-descricao' htmlFor='valor'>
              Valor:
            </label>
            <Field className='input-form' id='valor' name='valor' type='text' />
            {errors.valor && <span>{errors.valor}</span>}

            <Field name='user_id' type='hidden' value={userId} />

            <button type='submit' id='button-contas'>
              Salvar
            </button>
          </Form>
        )}
      />
    </main>
  );
};

export default FormularioContas;
