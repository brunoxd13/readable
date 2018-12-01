import * as Api from "../../service/api";
import { arrayToObject } from "../../service/utils";
import { addCommentCounter } from "./posts";

export const RECIVE_COMMENTS = "RECIVE_COMMENTS";
export const VOTE_COMMENT = "VOTE_COMMENT";
export const ADD_COMMENT = "ADD_COMMENT";

export function reciveComments(comments) {
  comments = arrayToObject(comments);
  return {
    type: RECIVE_COMMENTS,
    comments
  };
}

export const handleComments = postId => {
  return dispatch => {
    return Api.getComments(postId).then(comments =>
      dispatch(reciveComments(comments))
    );
  };
};

export function voteComment(id, option) {
  return {
    type: VOTE_COMMENT,
    id,
    option
  };
}

export function handleVoteComment(id, option) {
  return dispatch => {
    Api[option](id, "comment").then(() => {
      return dispatch(voteComment(id, option));
    });
  };
}

export function newComment(comment) {
  return {
    type: ADD_COMMENT,
    comment
  };
}

export function handleNewComment(comment) {
  return dispatch => {
    Api.createComment(
      Object.assign(comment, { id: Date.now(), timestamp: Date.now() })
    ).then(() => {
      dispatch(newComment(comment));
      return dispatch(addCommentCounter(comment.parentId));
    });
  };
}
