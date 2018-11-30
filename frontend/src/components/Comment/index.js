import React, { Component } from "react";
import { connect } from "react-redux";
import { handleVoteComment } from "../../store/actions/comments";
import { Feed, Button, Segment, Divider } from "semantic-ui-react";

class Comment extends Component {
  handleClickUpVote = () => {
    this.props.dispatch(handleVoteComment(this.props.comment.id, "upVote"));
  };

  handleClickDownVote = () => {
    this.props.dispatch(handleVoteComment(this.props.comment.id, "downVote"));
  };

  render() {
    const { comment } = this.props;

    return (
      <Segment>
        <Feed.Event>
          <Feed.Content>
            <Feed.Summary>
              <Feed.User>{comment.author}</Feed.User> Commented
              {/* <Feed.Date>1 Hour Ago</Feed.Date> */}
            </Feed.Summary>

            <Feed.Extra text>{comment.body}</Feed.Extra>
            <Divider />
            <Feed.Meta>
              <Feed.Like>
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
              </Feed.Like>
            </Feed.Meta>
          </Feed.Content>
        </Feed.Event>
      </Segment>
    );
  }
}

export default connect()(Comment);
