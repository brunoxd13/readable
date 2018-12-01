import {
  RECIVE_POSTS,
  VOTE_POST,
  INCREASE_COMMENT_COUNT,
  DEINCREASE_COMMENT_COUNT
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

    default:
      return state;
  }
}
