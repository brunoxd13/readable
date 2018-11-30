import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Icon, Item, Segment, Grid, Menu } from "semantic-ui-react";

import { truncateString } from "../../service/utils";
import { Link } from "react-router-dom";
import { handleVotePost } from "../../store/actions/posts";

import "./styles.css";

class Post extends Component {
  handleClickUpVote = () => {
    this.props.dispatch(handleVotePost(this.props.post.id, "upVote"));
  };

  handleClickDownVote = () => {
    this.props.dispatch(handleVotePost(this.props.post.id, "downVote"));
  };

  render() {
    const { post, isOnly } = this.props;

    return (
      <Segment>
        <Grid.Column>
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

                {!isOnly && (
                  <span className="icon">
                    <Icon name="comment outline" />
                    {post.commentCount}
                  </span>
                )}
              </Item.Meta>

              <Item.Description>
                <span className="icon">
                  <Icon name="tag" />
                  {post.category}
                </span>

                <p className="post-body">{isOnly && post.body}</p>
              </Item.Description>

              <Item.Extra>
                <Menu secondary>
                  <Menu.Item position="left">
                    <p className="post-body">
                      {!isOnly && truncateString(post.body, 75)}
                    </p>
                  </Menu.Item>

                  <Menu.Item position="right">
                    <Button.Group>
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
                  </Menu.Item>
                </Menu>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Grid.Column>
      </Segment>
    );
  }
}

export default connect()(Post);
