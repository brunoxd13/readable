import * as Api from "../../service/api";

export const RECIVE_POSTS = "RECIVE_POSTS";

export function recivePosts(posts) {
  return {
    type: RECIVE_POSTS,

    posts
  };
}

export const fetchPosts = () => {
  return dispatch => {
    return Api.getPosts().then(posts => dispatch(recivePosts(posts)));
  };
};
