import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import Dashboard from "@pages/Dashboard";
import Login from "@pages/Login";
import RouteControl from "@src/Router/midleware/routeControl";
import TokenUtils from "@utils/TokenUtils";


const Router = () => {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    setAuth(TokenUtils.hasToken());
    TokenUtils.onTokenChanged((hasToken: boolean) => {
      setAuth(hasToken);
    });
  }, []);

  return(
    <BrowserRouter>
      <Switch>
        <RouteControl path="/login" hasAccess={!auth} redirectTo="/" component={Login} /> 
        <RouteControl path="/" hasAccess={auth} redirectTo="/login" component={Dashboard} /> 
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
