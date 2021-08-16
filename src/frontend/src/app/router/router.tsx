import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../login";
import MyCard from "../mycard";
import { getToken } from "../services/auth";

const RouterNavigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        {getToken() && (
          <Route exact path="/mycard">
            <MyCard />
          </Route>
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default RouterNavigation;
