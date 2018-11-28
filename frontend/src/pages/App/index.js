import React, { Component } from "react";

import { connect } from "react-redux";
import { handleInitialData } from "../../store/actions/shared";

import FloatingMenu from "../../components/FloatingMenu";
import HeaderMenu from "../../components/HeaderMenu";
import PostList from "../../components/PostList";

import "./styles.css";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div>
        <HeaderMenu />
        <div className="content-container">
          <FloatingMenu categories={this.props.categories} />

          <div className="post-list-container">
            <PostList posts={this.props.posts} />
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ categories, posts }) {
  return {
    categories: categories,
    posts: posts
  };
}

export default connect(mapStateToProps)(App);
