import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string()
    .email('Digite um e-mail válido')
    .required('E-mail é obrigatório'),
  senha: Yup.string()
    .min(8, 'Senha deve ter no mínimo 8 caracteres')
    .required('Digite uma senha'),
});
