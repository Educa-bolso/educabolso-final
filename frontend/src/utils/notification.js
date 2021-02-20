import { toast } from 'react-toastify';

const notification = ({ titulo, tempo }) => {
  return toast(titulo, {
    position: 'top-right',
    className: 'toast-background',
    autoClose: tempo,
    style: {
      background: '#53b63f',
      color: '#FFF',
      fontWeight: 'bold',
    },
    progressStyle: { background: '#7159c1' },
  });
};

export default notification;
