import React from 'react';
//import { Router, Route } from 'react-router';

import { Switch, Route } from 'react-router-dom';
import Login from 'pages/login';
import Wrapper from 'pages/wrapper';
const createRoutes = [
  <Switch>
    <Route path="/" exact component={Login}></Route>
    <Route path="" exact component={Wrapper}></Route>
  </Switch>,
];

export default createRoutes;
