import React, { useState} from 'react'
import Modal from 'react-modal';
import Cadastro from './Formulario/Cadastro';
import Login from './Formulario/Login';
import './styles.css';
//import logo1 from '../../../../assets/logo1.gif';

Modal.setAppElement('#root')
 

function Menu() {
    const[modalIsOpenLogin, setModalIsOpenLogin] = useState(false)
    const[modalIsOpen, setModalIsOpen] = useState(false)

    
    return(
        <div id="menu">
            <nav class="navbar navbar-expand-lg navbar-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
                    <span class="navbar-toggler-icon"></span>
                </button>
                {/*<img id="logo" src={logo1}/>*/}<h3>EducaBolso</h3>
                <div class="collapse navbar-collapse" id="conteudoNavbarSuportado">
                <ul class="nav">
                
                <li id="barra" class="dropdown">
                    <a id="navegar" class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Quem Somos</a>
                    <div id="cardmenu" class="dropdown-menu">
                    <h4>Lorem ipsum tempor ligula gravida lacinia sociosqu nulla cubilia risus habitant, fringilla semper ut taciti neque lobortis conubia nam. diam pellentesque arcu vel malesuada ipsum et, purus per nisl curabitur hendrerit etiam eu, hac nam feugiat donec elementum. nunc tristique lacus elementum himenaeos quisque molestie nostra accumsan donec inceptos ultrices fames, conubia curabitur gravida placerat lacinia metus ullamcorper convallis nam vivamus interdum. eget etiam sociosqu placerat nibh non imperdiet morbi molestie mattis rhoncus mattis accumsan placerat fermentum integer, etiam curabitur tellus varius id erat libero platea tristique ligula suspendisse placerat erat. </h4>
                    </div>
                </li>
                <li id="barra" class="dropdown">
                    <a  id="navegar" class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Nossa Missão</a>
                    <div id="cardmenu" class="dropdown-menu">
                    <h4>Lorem ipsum tempor ligula gravida lacinia sociosqu nulla cubilia risus habitant, fringilla semper ut taciti neque lobortis conubia nam. diam pellentesque arcu vel malesuada ipsum et, purus per nisl curabitur hendrerit etiam eu, hac nam feugiat donec elementum. nunc tristique lacus elementum himenaeos quisque molestie nostra accumsan donec inceptos ultrices fames, conubia curabitur gravida placerat lacinia metus ullamcorper convallis nam vivamus interdum. eget etiam sociosqu placerat nibh non imperdiet morbi molestie mattis rhoncus mattis accumsan placerat fermentum integer, etiam curabitur tellus varius id erat libero platea tristique ligula suspendisse placerat erat. </h4>
                    </div>
                </li>
                <li class="dropdown">
                    <a id="navegar" class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Contato</a>
                    <div id="contato" class="dropdown-menu">
                    <br/><br/>
                    <h4> Entre em contato pelo nosso<br/> e-mail: educabolso1@gmail.com</h4>
                    </div>
                </li>
            </ul>
            </div>
            <ul class="nav" >
                <li id="barra">
                <button id="entrar" onClick={()=> setModalIsOpenLogin(true)}>Login</button>
                <div>
                    <Modal isOpen={modalIsOpenLogin}>
                        <div><button id="fechar" onClick={()=>setModalIsOpenLogin(false)}>X</button></div>
                            
                        <Login/>
                            
                    </Modal>
                </div>
                </li>
                <li>
                <button id="cadastro" onClick={()=> setModalIsOpen(true)}>Cadastro</button>
                <div>
                    <Modal isOpen={modalIsOpen}>
                    <div><button id="fechar" onClick={()=>setModalIsOpen(false)}>X</button></div>
                    <Cadastro/>
                    </Modal>
                </div>
                </li>
            </ul>
            </nav>
        
        </div>
        
    );   
    
}

export default Menu;
