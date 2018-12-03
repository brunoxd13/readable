import * as Api from "../../service/api";
import { arrayToObject, generateId } from "../../service/utils";
import { increaseCommentCounter, deincreaseCommentCounter } from "./posts";

export const RECIVE_COMMENTS = "RECIVE_COMMENTS";
export const VOTE_COMMENT = "VOTE_COMMENT";
export const ADD_COMMENT = "ADD_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";

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

export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    comment
  };
}

export function handleAddComment(comment) {
  return dispatch => {
    Api.createComment(
      Object.assign(comment, {
        id: generateId(),
        timestamp: Date.now()
      })
    ).then(commentRecived => {
      dispatch(addComment({ ...comment, ...commentRecived }));
      return dispatch(increaseCommentCounter(comment.parentId));
    });
  };
}

export function deleteComment(id) {
  return {
    type: DELETE_COMMENT,
    id
  };
}

export function handleDeleteComment(id, postId) {
  return dispatch => {
    Api.deleteComment(id).then(() => {
      dispatch(deleteComment(id));
      return dispatch(deincreaseCommentCounter(postId));
    });
  };
}

export function editComment(id, body) {
  return {
    type: EDIT_COMMENT,
    id,
    body
  };
}

export function handleEditComment(id, body) {
  return dispatch => {
    Api.updateComment(id, body).then(() => {
      dispatch(editComment(id, body));
    });
  };
}
