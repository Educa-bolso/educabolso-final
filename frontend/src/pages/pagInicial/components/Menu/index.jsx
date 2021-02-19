import React, { useState } from 'react';
import Modal from 'react-modal';
import Cadastro from './Formulario/Cadastro';
import Login from './Formulario/Login';
import './styles.css';
//import logo1 from '../../../../assets/logo1.gif';
import { useSelector, useDispatch } from 'react-redux';

Modal.setAppElement('#root');

function Menu() {
  const [modalIsOpenLogin, setModalIsOpenLogin] = useState(false);
  const dispatch = useDispatch();

  const modal = useSelector((state) => state.formularioCadastroReducer);

  /*const [modalIsOpen, setModalIsOpen] = useState(false);*/

  function abrirModal() {
    dispatch({ type: 'ABRIRCADASTRO' });
  }

  function fecharModal() {
    dispatch({ type: 'FECHARCADASTRO' });
  }

  return (
    <div id='menu'>
      <nav>
        {/*<img id="logo" src={logo1}/>*/}
        <h4>EducaBolso</h4>
        <div className='opcao'>
          <ul className='nav'>
            <li id='barra' className='dropdown'>
              <a
                id='navegar'
                className='dropdown-toggle'
                data-toggle='dropdown'
                href='#'
                role='button'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Quem Somos
              </a>
              <div id='cardmenu' className='dropdown-menu'>
                <h4>
                  Lorem ipsum tempor ligula gravida lacinia sociosqu nulla
                  cubilia risus habitant, fringilla semper ut taciti neque
                  lobortis conubia nam. diam pellentesque arcu vel malesuada
                  ipsum et, purus per nisl curabitur hendrerit etiam eu, hac nam
                  feugiat donec elementum. nunc tristique lacus elementum
                  himenaeos quisque molestie nostra accumsan donec inceptos
                  ultrices fames, conubia curabitur gravida placerat lacinia
                  metus ullamcorper convallis nam vivamus interdum. eget etiam
                  sociosqu placerat nibh non imperdiet morbi molestie mattis
                  rhoncus mattis accumsan placerat fermentum integer, etiam
                  curabitur tellus varius id erat libero platea tristique ligula
                  suspendisse placerat erat.{' '}
                </h4>
              </div>
            </li>
            <li id='barra' className='dropdown'>
              <a
                id='navegar'
                className='dropdown-toggle'
                data-toggle='dropdown'
                href='#'
                role='button'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Nossa Missão
              </a>
              <div id='cardmenu' className='dropdown-menu'>
                <h4>
                  Lorem ipsum tempor ligula gravida lacinia sociosqu nulla
                  cubilia risus habitant, fringilla semper ut taciti neque
                  lobortis conubia nam. diam pellentesque arcu vel malesuada
                  ipsum et, purus per nisl curabitur hendrerit etiam eu, hac nam
                  feugiat donec elementum. nunc tristique lacus elementum
                  himenaeos quisque molestie nostra accumsan donec inceptos
                  ultrices fames, conubia curabitur gravida placerat lacinia
                  metus ullamcorper convallis nam vivamus interdum. eget etiam
                  sociosqu placerat nibh non imperdiet morbi molestie mattis
                  rhoncus mattis accumsan placerat fermentum integer, etiam
                  curabitur tellus varius id erat libero platea tristique ligula
                  suspendisse placerat erat.{' '}
                </h4>
              </div>
            </li>
            <li className='dropdown'>
              <a
                id='navegar'
                className='dropdown-toggle'
                data-toggle='dropdown'
                href='#'
                role='button'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Contato
              </a>
              <div id='contato' className='dropdown-menu'>
                <br />
                <br />
                <h4>
                  {' '}
                  Entre em contato pelo nosso
                  <br /> e-mail: educabolso1@gmail.com
                </h4>
              </div>
            </li>
          </ul>
        </div>
        <div className='logar'>
          <ul className='nav'>
            <li id='barra'>
              <button id='entrar' onClick={() => setModalIsOpenLogin(true)}>
                Login
              </button>
              <div>
                <Modal isOpen={modalIsOpenLogin}>
                  <div>
                    <button
                      id='fechar'
                      onClick={() => setModalIsOpenLogin(false)}
                    >
                      X
                    </button>
                  </div>

                  <Login />
                </Modal>
              </div>
            </li>
            <li>
              <button id='cadastro' onClick={() => abrirModal()}>
                Cadastro
              </button>
              <div>
                <Modal isOpen={modal}>
                  <div>
                    <button id='fechar' onClick={() => fecharModal()}>
                      X
                    </button>
                  </div>
                  <Cadastro />
                </Modal>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
