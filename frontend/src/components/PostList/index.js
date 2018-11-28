import React, { Component } from "react";
import { connect } from "react-redux";

import Post from "../Post";
import "./styles.css";

class PostList extends Component {
  render() {
    return Object.values(this.props.posts).map(post => {
      return <Post post={post} isOnly={false} />;
    });
  }
}

function mapStateToProps({ posts }) {
  return {
    posts: posts
  };
}

export default connect(mapStateToProps)(PostList);
