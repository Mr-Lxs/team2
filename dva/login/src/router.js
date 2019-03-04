import React from 'react';
import { Router, Route, Switch ,redirect} from 'dva/router';
import IndexPage from './containers/indexpage/IndexPage';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/"  exact component={IndexPage} />
       
      </Switch>
    </Router>
  );
}

export default RouterConfig;
