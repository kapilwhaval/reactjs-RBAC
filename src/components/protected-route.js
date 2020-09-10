import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ path, component }) => {

  const { user } = useSelector(state => state.userDetails);
  const Component = component;

  const checkAccess = () => {

    let isAuthorized = user.modules.find(module => module.modulePageUrl === path);
    let access = [];
    user.modules.forEach((module) => { if (module.modulePageUrl === path) access = module.actions })

    return isAuthorized ? <Component {...access} /> : <Redirect to={{ pathname: "/unauthorized" }} />
  }

  return <Route
    exact path={path}
    render={() => checkAccess()}
  />
};

export default ProtectedRoute;