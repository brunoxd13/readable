import * as Api from "../../service/api";
import { arrayToObject, generateId } from "../../service/utils";

export const RECIVE_POSTS = "RECIVE_POSTS";
export const VOTE_POST = "VOTE_POST";
export const INCREASE_COMMENT_COUNT = "INCREASE_COMMENT_COUNT";
export const DEINCREASE_COMMENT_COUNT = "DEINCREASE_COMMENT_COUNT";
export const ADD_POST = "ADD_POST";

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

export function increaseCommentCounter(id) {
  return {
    type: INCREASE_COMMENT_COUNT,
    id
  };
}

export function deincreaseCommentCounter(id) {
  return {
    type: DEINCREASE_COMMENT_COUNT,
    id
  };
}

export function addPost(post) {
  return {
    type: ADD_POST,
    post
  };
}

export function handleAddPost(post) {
  console.log(post);
  return dispatch => {
    Api.createPost(
      Object.assign(post, {
        id: generateId(),
        timestamp: Date.now(),
        deleted: false,
        voteScore: 1,
        commentCount: 0
      })
    ).then(() => {
      return addPost(post);
    });
  };
}
