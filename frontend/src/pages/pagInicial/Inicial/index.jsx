import './styles.css';
import game from '../../../assets/game.png';
import calculadora from '../../../assets/calculadora.png';
import bau from '../../../assets/bau.png';



function Inicial(){
    return(
        <div class="container">
            
            <div class="card-deck">
                <div class="card" id="card">
                    <img class="card-img-top" id="img1" src={calculadora} alt="Imagem de capa do card"/>
                <div class="card-body">
                <h3 class="card-text">Aprenda a administrar o seu dinheiro de uma forma simples e divertida.</h3>
            </div>
            
        </div>
        <div class="card" id="card">
                <img class="card-img-top" id="img" src={game} alt="Imagem de capa do card"/>
            <div/>
            <div class="card-body">
                <h3 class="card-text">Com uma metodologia gameficada.</h3>
            </div>
            
        </div>
        <div class="card" id="card">
                <img class="card-img-top" id="img" src={bau} alt="Imagem de capa do card"/>
            <div class="card-body">
                <h3 class="card-text">Ganhe ou perca moedas de acordo com suas respostas e troque elas por benefícios.</h3>
            </div>
            </div>
            </div>
        </div>
    );
}
export default Inicial;