import React, { Component } from "react";
import { connect } from "react-redux";

import Post from "../Post";

class PostView extends Component {
  render() {
    const { post } = this.props;

    return post ? <Post post={post} isOnly={true} /> : null;
  }
}

function mapStateToProps({ posts }, { match }) {
  return {
    post: Object.values(posts).filter(p => p.id === match.params.id)[0]
  };
}

export default connect(mapStateToProps)(PostView);
