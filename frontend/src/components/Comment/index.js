import React from "react";
import { Feed, Button, Segment, Divider } from "semantic-ui-react";

const Comment = ({ comment }) => (
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
              <Button icon="thumbs up" color="teal" />
              <Button.Or text={comment.voteScore} />
              <Button icon="thumbs down" color="red" />
            </Button.Group>
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
  </Segment>
);

export default Comment;
