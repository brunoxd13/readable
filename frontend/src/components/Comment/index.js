import React, { Component } from "react";
import { connect } from "react-redux";
import {
  handleVoteComment,
  handleDeleteComment,
  handleEditComment
} from "../../store/actions/comments";
import {
  Feed,
  Button,
  Icon,
  Menu,
  Grid,
  Form,
  TextArea
} from "semantic-ui-react";

import "./style.css";

class Comment extends Component {
  state = {
    isEditing: false,
    newComment: this.props.comment.body
  };

  handleClickUpVote = () => {
    this.props.dispatch(handleVoteComment(this.props.comment.id, "upVote"));
  };

  handleClickDownVote = () => {
    this.props.dispatch(handleVoteComment(this.props.comment.id, "downVote"));
  };

  handleDeleteComment = () => {
    this.props.dispatch(
      handleDeleteComment(this.props.comment.id, this.props.comment.parentId)
    );
  };

  handleEditComment = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  handleComment = e => {
    this.setState({ newComment: e.target.value });
  };

  handleSaveEditComment = () => {
    this.props.dispatch(
      handleEditComment(this.props.comment.id, this.state.newComment)
    );

    this.handleEditComment();
  };

  render() {
    const { comment } = this.props;

    return (
      <Feed.Event>
        <Feed.Label>
          <Icon name="comments outline" />
        </Feed.Label>
        <Feed.Content>
          <Feed.Date>1 Hour Ago</Feed.Date>
          <Feed.Summary>
            <Feed.User>@{comment.author}</Feed.User>
          </Feed.Summary>

          {this.state.isEditing ? (
            <Feed.Extra>
              <Form>
                <TextArea
                  value={this.state.newComment}
                  onChange={this.handleComment}
                />
              </Form>
            </Feed.Extra>
          ) : (
            <Feed.Extra text>{comment.body}</Feed.Extra>
          )}

          <div className="group-btn">
            <Grid columns={11}>
              {/* <Menu secondary> */}
              {/* <Menu.Item position="left"> */}
              <Grid.Column floated="left">
                <Button.Group size="mini">
                  <Button
                    icon="thumbs up"
                    color="teal"
                    onClick={this.handleClickUpVote}
                  />
                  <Button.Or text={comment.voteScore} />
                  <Button
                    icon="thumbs down"
                    color="red"
                    onClick={this.handleClickDownVote}
                  />
                </Button.Group>
              </Grid.Column>
              {/* </Menu.Item> */}

              {/* <Menu.Item position="right"> */}
              <Grid.Column floated="right">
                {this.state.isEditing ? (
                  <Button.Group basic size="mini" floated="right">
                    <Button onClick={this.handleSaveEditComment}>Save</Button>
                    <Button onClick={this.handleEditComment}>Cancel</Button>
                  </Button.Group>
                ) : (
                  <Button.Group basic size="mini">
                    <Button
                      icon="edit outline"
                      onClick={this.handleEditComment}
                    />
                    <Button
                      icon="trash alternate outline"
                      onClick={this.handleDeleteComment}
                    />
                  </Button.Group>
                )}
              </Grid.Column>
              {/* </Menu.Item> */}
              {/* </Menu> */}
            </Grid>
          </div>
        </Feed.Content>
      </Feed.Event>
    );
  }
}

export default connect()(Comment);
