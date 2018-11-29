import * as Api from "../../service/api";
import { arrayToObject } from "../../service/utils";

export const RECIVE_POSTS = "RECIVE_POSTS";
export const VOTE_POST = "VOTE_POST";

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
    let vote = () => {};

    if (option === "upVote") {
      vote = Api.upVote;
    } else {
      vote = Api.downVote;
    }

    vote(id).then(() => {
      return dispatch(votePost(id, option));
    });
  };
}
