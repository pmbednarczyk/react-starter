import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import routes from '../../routes';

const App = () => (
    <Switch>
      {
        routes.map((route, index) => <Route key={route.path || index} {...route} />)
      }
    </Switch>
);

export default withRouter(App);
