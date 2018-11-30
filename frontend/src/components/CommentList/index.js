import React, { Component } from "react";
import { connect } from "react-redux";

import { handleComments } from "../../store/actions/comments";
import { Feed } from "semantic-ui-react";
import Comment from "../Comment";

class CommentList extends Component {
  componentDidMount() {
    this.props.dispatch(handleComments(this.props.postId));
  }

  render() {
    return (
      <Feed>
        <h2>Comments</h2>

        {Object.values(this.props.comments).map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </Feed>
    );
  }
}

function mapStateToProps({ comments }) {
  return {
    comments: comments
  };
}

export default connect(mapStateToProps)(CommentList);
