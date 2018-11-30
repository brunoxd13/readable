import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "../Post";
import CommentList from "../CommentList";

class PostView extends Component {
  render() {
    const { post } = this.props;

    return post ? (
      <>
        <Post post={post} isOnly={true} />
        <CommentList postId={post.id} />
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
