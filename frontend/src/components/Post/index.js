import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Icon, Divider, Item, Label } from "semantic-ui-react";
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
      <div className="group-container">
        <Item.Group>
          <Item key={post.id}>
            <Item.Content>
              <Item.Header as="a">
                <Link to={`/${post.category}/${post.id}`}>{post.title}</Link>
              </Item.Header>

              <Item.Meta>
                <span>
                  <Icon name="user circle" />
                  {post.author}
                </span>

                <span>
                  <Icon name="comment" />
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
                    icon="thumbs up outline"
                    onClick={this.handleClickUpVote}
                  />
                  <Button.Or text={post.voteScore} />
                  <Button
                    icon="thumbs down outline"
                    onClick={this.handleClickDownVote}
                  />
                </Button.Group>

                {!isOnly && (
                  <Link to={`/${post.category}/${post.id}`}>
                    <Button secondary floated="right">
                      Continue Reading
                      <Icon name="right chevron" />
                    </Button>
                  </Link>
                )}
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </div>
    );
  }
}

export default connect()(Post);
