import React, { Component } from "react";
import Post from "../Post";
import "./styles.css";

class PostList extends Component {
  render() {
    return Object.values(this.props.posts).map(post => {
      return <Post post={post} isOnly={false} />;
    });
  }
}

export default PostList;
