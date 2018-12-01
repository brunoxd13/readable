import React, { Component } from "react";
import { connect } from "react-redux";
import {
  handleVoteComment,
  handleDeleteComment
} from "../../store/actions/comments";
import { Feed, Button, Icon, Menu, Grid } from "semantic-ui-react";

class Comment extends Component {
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

          <Feed.Extra>{comment.body}</Feed.Extra>

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
              <Button.Group basic size="mini">
                <Button icon="edit outline" />
                <Button
                  icon="trash alternate outline"
                  onClick={this.handleDeleteComment}
                />
              </Button.Group>
            </Grid.Column>
            {/* </Menu.Item> */}
            {/* </Menu> */}
          </Grid>
        </Feed.Content>
      </Feed.Event>
    );
  }
}

export default connect()(Comment);
