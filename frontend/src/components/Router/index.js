import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import PostList from "../PostList";
import PostView from "../PostView";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={PostList} />
      <Route exact path="/:category/:id" component={PostView} />
      <Route component={() => <Redirect to={{ pathname: "/" }} />} />
    </Switch>
  </BrowserRouter>
);

export default Router;
