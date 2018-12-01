import {
  RECIVE_COMMENTS,
  VOTE_COMMENT,
  ADD_COMMENT
} from "../actions/comments";

export default function comments(state = {}, action) {
  switch (action.type) {
    case RECIVE_COMMENTS:
      return {
        ...action.comments
      };

    case VOTE_COMMENT:
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

    case ADD_COMMENT:
      return {
        ...state,
        [action.comment.id]: {
          ...action.comment
        }
      };

    default:
      return state;
  }
}
