import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PostListContainer from "../PostListContainer";
import PostView from "../PostView";
import NewPost from "../NewPost";

const Router = () => (
  <Switch>
    <Route exact path="/" component={PostListContainer} />
    <Route exact path="/:category" component={PostListContainer} />
    <Route path="/:category/:id" component={PostView} />
    <Route path="/new-post" component={NewPost} />
    <Route component={() => <Redirect to={{ pathname: "/" }} />} />
  </Switch>
);

export default Router;
