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

const RouterNavigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default RouterNavigation;
