import *as Yup from 'yup';

export default Yup.object().shape({
    msg: Yup.string().required("Por favor, deixa sua opinião"),
});