import React, { Component } from "react";
import { connect } from "react-redux";

import { handleComments } from "../../store/actions/comments";
import CommentList from "../CommentList";

import { Header, Icon } from "semantic-ui-react";

class CommentListContainer extends Component {
  componentDidMount() {
    this.props.dispatch(handleComments(this.props.postId));
  }

  render() {
    if (Object.keys(this.props.comments).length <= 0) {
      return (
        <Header as="h2" icon textAlign="center">
          <Icon name="comments outline" circular />
          <Header.Content>
            No comments yet
            <Header.Subheader>Go ahead and be the first!</Header.Subheader>
          </Header.Content>
        </Header>
      );
    }

    return <CommentList comments={this.props.comments} />;
  }
}

function mapStateToProps({ comments }) {
  return {
    comments: comments
  };
}

export default connect(mapStateToProps)(CommentListContainer);
