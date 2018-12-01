import * as Api from "../../service/api";
import { arrayToObject } from "../../service/utils";

export const RECIVE_POSTS = "RECIVE_POSTS";
export const VOTE_POST = "VOTE_POST";
export const ADD_COMMENT_COUNT = "ADD_COMMENT_COUNT";
export const DELTE_COMMENT_COUNT = "DELTE_COMMENT_COUNT";

export function recivePosts(posts) {
  posts = arrayToObject(posts);
  return {
    type: RECIVE_POSTS,
    posts
  };
}

export const fetchPosts = () => {
  return dispatch => {
    return Api.getPosts().then(posts => {
      dispatch(recivePosts(posts));
    });
  };
};

export function votePost(id, option) {
  return {
    type: VOTE_POST,
    id,
    option
  };
}

export function handleVotePost(id, option) {
  return dispatch => {
    Api[option](id).then(() => {
      return dispatch(votePost(id, option));
    });
  };
}

export function addCommentCounter(id) {
  return {
    type: ADD_COMMENT_COUNT,
    id
  };
}

export function deleteCommentCounter(id) {
  return {
    type: DELTE_COMMENT_COUNT,
    id
  };
}
