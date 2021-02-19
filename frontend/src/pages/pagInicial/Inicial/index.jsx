import './styles.css';
import game from '../../../assets/game.png';
import calculadora from '../../../assets/calculadora.png';
import bau from '../../../assets/bau.png';
import Menu from '../components/Menu';
import Footer from '../../../components/Footer';


function Inicial(){
    return(
        <div className="container">
            <header>
                <Menu/>
            </header>
            <div className="card-deck" id="bloco">
                <div id="cartao">
                    <img id="calcu" src={calculadora} alt="Calculadora"/>
                <div>
                <h3>Aprenda a administrar o seu dinheiro de uma forma simples e divertida.</h3>
            </div>
            
        </div>
        <div  id="cartao">
                <img id="imgInicial" src={game} alt="game"/>
            <div/>
            <div>
                <h3>Com uma metodologia gameficada.</h3>
            </div>
            
        </div>
        <div className="cartaoBau" id="cartao">
                <img id="imgInicial" src={bau} alt="bau de moedas"/>
            <div>
                <h3>Ganhe ou perca moedas de acordo com suas respostas e troque elas por benefícios.</h3>
            </div>
        </div>
        </div>
        <section>  
            <Footer/>
        </section>
        </div>
    );
}
export default Inicial;