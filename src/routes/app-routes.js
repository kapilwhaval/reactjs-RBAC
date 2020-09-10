import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProtectedRoute from '../components/protected-route';
import Dashboard from '../screens/dashboard';
import Roles from '../screens/roles';
import Users from '../screens/users';
import AccessDenied from '../screens/access-denied';
import PageNotFound from '../screens/page-not-found';

export default () => {
    return (
        <Switch>
            <Route exact path="/" component={() => <Redirect to="/dashboard" />} />
            <ProtectedRoute path="/dashboard" component={Dashboard} />
            <ProtectedRoute path="/roles" component={Roles} />
            <ProtectedRoute path="/users" component={Users} />
            <Route exact path="/unauthorized" component={AccessDenied} />
            <Route path="*" component={PageNotFound} />
        </Switch>
    );
}
