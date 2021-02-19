import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RoutesPrivate from './RoutesPrivate';

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

        <RoutesPrivate exact path='/jogo' component={Home} />
        <RoutesPrivate exact path='/jogo/fase1' component={Fase1} />
        <RoutesPrivate exact path='/jogo/fase2' component={Fase2} />
        <RoutesPrivate exact path='/contas' component={Contas} />
        <RoutesPrivate exact path='/saibamais' component={SaibaMais} />
        <RoutesPrivate exact path='/feedback' component={Feedback} />
        <RoutesPrivate exact path='/perfil' component={Perfil} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
