import * as Api from "../../service/api";
import { arrayToObject } from "../../service/utils";

export const RECIVE_COMMENTS = "RECIVE_COMMENTS";
export const VOTE_COMMENT = "VOTE_COMMENT";

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
