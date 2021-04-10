import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import pages from './pages';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={pages.Home}></Route>
      </Switch>
    </Router>
  );
};

export default Routes;
