// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/app';
import Dashboard from './containers/app/__dashboard';
import Editor from './containers/app/__editor';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} />
    <Route path="edit/:id" component={Editor} />
  </Route>
);
