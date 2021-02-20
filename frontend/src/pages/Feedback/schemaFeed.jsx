import * as Yup from 'yup';

export default Yup.object().shape({
  mensagem: Yup.string()
    .min(5, 'No mínimo 5 caracters.')
    .required('A sua opinião é importante!!'),
});
