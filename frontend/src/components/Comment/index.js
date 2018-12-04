import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Feed, Button, Icon, Grid, Form, TextArea } from "semantic-ui-react";
import { getDateFromTimestamp } from "../../service/utils";
import {
  handleVoteComment,
  handleDeleteComment,
  handleEditComment
} from "../../store/actions/comments";

import "./style.css";

class Comment extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    authedUser: PropTypes.string.isRequired
  };

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
    if (this.state.newComment === "") {
      return;
    }

    this.props.dispatch(
      handleEditComment(this.props.comment.id, this.state.newComment)
    );

    this.handleEditComment();
  };

  render() {
    const { comment, authedUser } = this.props;
    const { isEditing, newComment } = this.state;

    return (
      <Feed.Event>
        <Feed.Label>
          <Icon name="comments outline" />
        </Feed.Label>
        <Feed.Content>
          <Feed.Date>{getDateFromTimestamp(comment.timestamp)}</Feed.Date>
          <Feed.Summary>
            <Feed.User>@{comment.author}</Feed.User>
          </Feed.Summary>

          {isEditing ? (
            <Feed.Extra>
              <Form>
                <TextArea value={newComment} onChange={this.handleComment} />
              </Form>
            </Feed.Extra>
          ) : (
            <Feed.Extra text>{comment.body}</Feed.Extra>
          )}

          <div className="group-btn">
            <Grid>
              <Grid.Column width={8} floated="left">
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

              <Grid.Column width={8} floated="right">
                {this.state.isEditing ? (
                  <Button.Group basic size="mini" floated="right">
                    <Button onClick={this.handleSaveEditComment}>Save</Button>
                    <Button onClick={this.handleEditComment}>Cancel</Button>
                  </Button.Group>
                ) : (
                  authedUser === comment.author && (
                    <Button.Group basic size="mini" floated="right">
                      <Button
                        icon="edit outline"
                        onClick={this.handleEditComment}
                      />
                      <Button
                        icon="trash alternate outline"
                        onClick={this.handleDeleteComment}
                      />
                    </Button.Group>
                  )
                )}
              </Grid.Column>
            </Grid>
          </div>
        </Feed.Content>
      </Feed.Event>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser: authedUser
  };
}

export default connect(mapStateToProps)(Comment);
