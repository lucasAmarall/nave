import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import Dashboard from "@pages/Dashboard";
import Login from "@pages/Login";
import RouteControl from "@src/Router/midleware/routeControl";
import TokenUtils from "@utils/TokenUtils";
import { pathEnum } from "@constants/path";

import APIService from "@api/index";

const Router = () => {
  const token = TokenUtils.getToken();
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    TokenUtils.onTokenChange(setAuth);
    if(!token) return;
    const service = new APIService();
    TokenUtils.setToken(token);
    service.addHeaderToken(token);
  }, [token]);

  return(
    <BrowserRouter>
      <Switch>
        <RouteControl 
          path={pathEnum.login} 
          hasAccess={!auth} 
          redirectTo={pathEnum.home} 
          component={Login} 
        /> 
        <RouteControl 
          path={pathEnum.home} 
          hasAccess={auth} 
          redirectTo={pathEnum.login}
          component={Dashboard} 
        /> 
        <RouteControl 
          path={pathEnum.default} 
          hasAccess={auth} 
          redirectTo={pathEnum.login}
          component={Dashboard} 
        /> 
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
