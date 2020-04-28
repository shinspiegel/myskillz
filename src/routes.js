import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={() => <h1>404</h1>} path='/*' />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
