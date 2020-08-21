import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import Dashboard from "@pages/Dashboard";
import Login from "@pages/Login";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/">
        <Dashboard />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;