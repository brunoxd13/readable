import * as Api from "../../service/api";

export const RECIVE_COMMENTS = "RECIVE_COMMENTS";

export function reciveComments(comments) {
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
