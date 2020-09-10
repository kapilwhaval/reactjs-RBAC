import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Login from '../screens/login';
import PageNotFound from '../screens/page-not-found';

export default () => (
    <Switch>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route exact path="/login" component={Login} />
        <Route path="*" component={PageNotFound} />
    </Switch>
);