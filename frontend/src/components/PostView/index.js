import React, { Component } from "react";
import { connect } from "react-redux";
import { Header, Icon } from "semantic-ui-react";
import PropTypes from "prop-types";

import Post from "../Post";
import NewComment from "../NewComment";
import CommentListContainer from "../CommentListContainer";

class PostView extends Component {
  static propTypes = {
    post: PropTypes.object
  };

  render() {
    const { post } = this.props;

    return post ? (
      <>
        <Post post={post} isOnly={true} />
        <NewComment postId={post.id} />
        <CommentListContainer postId={post.id} />
      </>
    ) : (
      <Header as="h2" icon textAlign="center">
        <Icon name="search" circular />
        <Header.Content>
          <h1>404</h1>
          <Header.Subheader>We couldn’t find this page.</Header.Subheader>
        </Header.Content>
      </Header>
    );
  }
}

function mapStateToProps({ posts }, { match }) {
  return {
    post: Object.values(posts).filter(p => p.id === match.params.id)[0]
  };
}

export default connect(mapStateToProps)(PostView);
