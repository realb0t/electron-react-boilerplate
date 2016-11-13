// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Dashboard from './containers/Dashboard';
import Editor from './containers/Editor';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} />
    <Route path="/edit" component={Editor} />
  </Route>
);
