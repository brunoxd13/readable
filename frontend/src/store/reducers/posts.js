import {
  RECIVE_POSTS,
  VOTE_POST,
  INCREASE_COMMENT_COUNT,
  DEINCREASE_COMMENT_COUNT,
  ADD_POST,
  DELETE_POST
} from "../actions/posts";

export default function posts(state = {}, action) {
  switch (action.type) {
    case RECIVE_POSTS:
      return {
        ...state,
        ...action.posts
      };

    case VOTE_POST:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          voteScore:
            action.option === "upVote"
              ? state[action.id].voteScore + 1
              : state[action.id].voteScore - 1
        }
      };

    case INCREASE_COMMENT_COUNT:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          commentCount: state[action.id].commentCount + 1
        }
      };

    case DEINCREASE_COMMENT_COUNT:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          commentCount: state[action.id].commentCount - 1
        }
      };

    case ADD_POST:
      return {
        ...state,
        [action.post.id]: {
          ...action.post
        }
      };

    case DELETE_POST:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          deleted: true
        }
      };

    default:
      return state;
  }
}
