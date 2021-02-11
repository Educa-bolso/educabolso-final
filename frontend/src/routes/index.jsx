import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Contas from '../pages/Contas';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contas' component={Contas} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
