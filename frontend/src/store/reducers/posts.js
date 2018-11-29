import { RECIVE_POSTS, VOTE_POST } from "../actions/posts";

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

    default:
      return state;
  }
}
