import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PostListContainer from "../PostListContainer";
import PostView from "../PostView";

const Router = () => (
  <Switch>
    <Route exact path="/" component={PostListContainer} />
    <Route path="/:category/:id" component={PostView} />
    <Route component={() => <Redirect to={{ pathname: "/" }} />} />
  </Switch>
);

export default Router;
