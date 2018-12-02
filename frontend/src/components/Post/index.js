import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Icon, Item, Segment, Grid } from "semantic-ui-react";

import { truncateString } from "../../service/utils";
import { Link, withRouter } from "react-router-dom";
import { handleVotePost, handleDeletePost } from "../../store/actions/posts";

import "./styles.css";

class Post extends Component {
  handleClickUpVote = () => {
    this.props.dispatch(handleVotePost(this.props.post.id, "upVote"));
  };

  handleClickDownVote = () => {
    this.props.dispatch(handleVotePost(this.props.post.id, "downVote"));
  };

  handleDeletePost = () => {
    this.props.dispatch(handleDeletePost(this.props.post.id));
    this.props.history.push("/");
  };

  render() {
    const { post, isOnly } = this.props;

    return (
      <Segment>
        <Item key={post.id}>
          <Item.Content>
            <Item.Header>
              <Link to={`/${post.category}/${post.id}`}>
                <h2>{post.title}</h2>
              </Link>
            </Item.Header>

            <Item.Meta>
              <span className="icon">
                <Icon name="user outline" />
                {post.author}
              </span>

              <span className="icon">
                <Icon name="comment outline" />
                {post.commentCount}
              </span>
            </Item.Meta>

            <Item.Description>
              <span className="icon">
                <Icon name="tag" />
                {post.category}
              </span>

              <p className="post-body">{isOnly && post.body}</p>
            </Item.Description>

            <Item.Extra>
              <Grid>
                <Grid.Column width={8} floated="left">
                  <p className="post-body">
                    {!isOnly ? (
                      truncateString(post.body, 75)
                    ) : (
                      <Button.Group basic size="mini">
                        <Button
                          icon="edit outline"
                          onClick={this.handleEditPost}
                        />
                        <Button
                          icon="trash alternate outline"
                          onClick={this.handleDeletePost}
                        />
                      </Button.Group>
                    )}
                  </p>
                </Grid.Column>

                <Grid.Column width={8} floated="right">
                  <Button.Group floated="right">
                    <Button
                      icon="thumbs up"
                      color="teal"
                      onClick={this.handleClickUpVote}
                    />
                    <Button.Or text={post.voteScore} />
                    <Button
                      icon="thumbs down"
                      color="red"
                      onClick={this.handleClickDownVote}
                    />
                  </Button.Group>
                </Grid.Column>
              </Grid>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Segment>
    );
  }
}

export default withRouter(connect()(Post));
