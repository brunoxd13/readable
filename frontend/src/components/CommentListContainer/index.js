import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Header, Icon } from "semantic-ui-react";

import { handleComments } from "../../store/actions/comments";
import CommentList from "../CommentList";

class CommentListContainer extends Component {
  static propTypes = {
    comments: PropTypes.object.isRequired,
    postId: PropTypes.number.isRequired
  };

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
    comments: Object.values(comments).filter(comment => {
      return comment.deleted === false;
    })
  };
}

export default connect(mapStateToProps)(CommentListContainer);
