import * as Api from "../../service/api";
import { arrayToObject, generateId } from "../../service/utils";

export const RECIVE_POSTS = "RECIVE_POSTS";
export const VOTE_POST = "VOTE_POST";
export const INCREASE_COMMENT_COUNT = "INCREASE_COMMENT_COUNT";
export const DEINCREASE_COMMENT_COUNT = "DEINCREASE_COMMENT_COUNT";
export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";
export const UPDATE_POST = "UPDATE_POST";

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
  return dispatch => {
    Api.createPost(
      Object.assign(post, {
        id: generateId(),
        timestamp: Date.now()
      })
    ).then(postRecived => {
      return dispatch(addPost({ ...post, ...postRecived }));
    });
  };
}

export function deletePost(id) {
  return {
    type: DELETE_POST,
    id
  };
}

export function handleDeletePost(id) {
  return dispatch => {
    Api.deletePost(id).then(() => {
      return dispatch(deletePost(id));
    });
  };
}

export function updatePost(id, title, body, category) {
  return {
    type: UPDATE_POST,
    id,
    title,
    body,
    category
  };
}

export function handleUpdatePost(id, title, body, category) {
  return dispatch => {
    Api.updatePost(id, title, body, category).then(() => {
      return dispatch(updatePost(id, title, body, category));
    });
  };
}
