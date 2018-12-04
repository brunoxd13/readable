import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Header, Icon } from "semantic-ui-react";
import { orderPost } from "../../service/utils";

import PostList from "../PostList";

class PostListContainer extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    sort: PropTypes.object.isRequired
  };

  render() {
    if (Object.keys(this.props.posts).length <= 0) {
      return (
        <Header as="h2" icon textAlign="center">
          <Icon name="file alternate outline" circular />
          <Header.Content>
            No posts yet
            <Header.Subheader>Go ahead and be the first!</Header.Subheader>
          </Header.Content>
        </Header>
      );
    }

    return <PostList posts={this.props.posts} />;
  }
}

function mapStateToProps({ posts, sort }, { match }) {
  const postsFiltred = Object.values(posts).filter(
    post =>
      post.deleted === false &&
      (!match.params.category || post.category === match.params.category)
  );

  return {
    posts: orderPost(postsFiltred, sort.orderBy)
  };
}

export default connect(mapStateToProps)(PostListContainer);
