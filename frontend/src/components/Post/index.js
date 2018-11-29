import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Icon, Divider, Item, Label, Segment } from "semantic-ui-react";
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
        <Item key={post.id}>
          <Item.Content>
            <Item.Header>
              <Link to={`/${post.category}/${post.id}`}>{post.title}</Link>
            </Item.Header>

            <Item.Meta>
              <span className="icon-user">
                <Icon name="user outline" />
                {post.author}
              </span>
              <span>
                <Icon name="comment outline" />
                {post.commentCount}
              </span>
            </Item.Meta>

            <Item.Description>
              {!isOnly ? truncateString(post.body, 200) : post.body}
            </Item.Description>

            <Label>{post.category}</Label>

            <Divider />

            <Item.Extra>
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

              {!isOnly && (
                <Link to={`/${post.category}/${post.id}`}>
                  <Button inverted color="blue" floated="right">
                    Continue Reading
                    <Icon name="right chevron" />
                  </Button>
                </Link>
              )}
            </Item.Extra>
          </Item.Content>
        </Item>
      </Segment>
    );
  }
}

export default connect()(Post);
