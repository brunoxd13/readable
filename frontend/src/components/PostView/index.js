import React, { Component } from "react";
import { connect } from "react-redux";

import Post from "../Post";
import NewComment from "../NewComment";
import CommentListContainer from "../CommentListContainer";

class PostView extends Component {
  render() {
    const { post } = this.props;

    return post ? (
      <>
        <Post post={post} isOnly={true} />
        <NewComment />
        <CommentListContainer postId={post.id} />
      </>
    ) : null;
  }
}

function mapStateToProps({ posts }, { match }) {
  return {
    post: Object.values(posts).filter(p => p.id === match.params.id)[0]
  };
}

export default connect(mapStateToProps)(PostView);
