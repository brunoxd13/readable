import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import PostList from "../PostList";

const Router = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={() => <PostList />} />
      <Route component={() => <Redirect to={{ pathname: "/" }} />} />
    </Switch>
  </HashRouter>
);

export default Router;
