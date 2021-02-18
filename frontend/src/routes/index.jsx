import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Inicial from '../pages/pagInicial/Inicial/';
import Home from '../pages/Home';
import Contas from '../pages/Contas';
import SaibaMais from '../pages/SaibaMais';
import Feedback from '../pages/Feedback';
import Perfil from '../pages/Perfil';
import Fase1 from '../pages/Jogo/Fase1';
import Fase2 from '../pages/Jogo/Fase2';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Inicial} /> 
        <Route path='/jogo' component={Home} />
        <Route path='/jogo/fase1' component={Fase1} />
        <Route path='/jogo/fase2' component={Fase2} />
        <Route path='/contas' component={Contas} />
        <Route path='/saibamais' component={SaibaMais} />
        <Route path='/feedback' component={Feedback} />
        <Route path='/perfil' component={Perfil} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
