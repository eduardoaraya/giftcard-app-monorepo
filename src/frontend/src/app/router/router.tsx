import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  // Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";
import Login from "../login";
import MyCard from "../mycard";

const RouterNavigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/mycard">
          <MyCard />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default RouterNavigation;
