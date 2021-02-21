import * as Yup from 'yup';

export default Yup.object().shape({
  nome: Yup.string()
    .min(3, 'Digite no mínimo 3 caracteres')
    .required('Por favor, digite um nome'),
  valor: Yup.string().required('Digite um valor'),
});
