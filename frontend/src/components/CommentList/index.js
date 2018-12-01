import React from "react";
import { Feed } from "semantic-ui-react";
import Comment from "../Comment";

const CommentList = ({ comments }) => (
  <Feed>
    <h3>Comments</h3>

    {Object.values(comments).map(comment => (
      <Comment key={comment.id} comment={comment} />
    ))}
  </Feed>
);

export default CommentList;
