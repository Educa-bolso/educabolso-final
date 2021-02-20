import * as Yup from 'yup';

export default Yup.object().shape({
  nome: Yup.string()
    .min(3, 'Digite no mínimo 3 caracteres')
    .required('Por favor, digite um nome'),
  sobrenome: Yup.string().required('Digite o Sobrenome'),
  endereco: Yup.string().required('Digite seu endereço'),
  data_nascimento: Yup.date().required('Digite a data de nascimento'),
  tipo_trabalho: Yup.string().required('Preencha um dos campos'),
});
