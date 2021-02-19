import *as Yup from 'yup';

export default Yup.object().shape({
    nome: Yup.string().min(2, "Nome deve ter no mínimo 3 caracteres").required("Digite um nome"),
    email: Yup.string().email("Digite um e-mail válido").required("E-mail é obrigatório"),
    senha: Yup.string().min(8, "Senha deve ter no mínimo 8 caracteres").required("Digite uma senha"),
    confirmarSenha: Yup.string().min(8,"Senha não corresponde").required("Confirme a senha")
});