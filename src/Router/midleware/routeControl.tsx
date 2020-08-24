import React from "react";
import { Route, Redirect } from "react-router-dom";
import { IRouteControlProps } from "@interfaces/IRouteControlProps.interface";

const RouteControl = ({component: Component, redirectTo, path, hasAccess}: IRouteControlProps) => (
  <Route
    path={path} 
    render={props => hasAccess ? 
      (<Component {...props} />) :
      ( <Redirect to={{ pathname: redirectTo }} />)
    }
  />
);

export default RouteControl;
