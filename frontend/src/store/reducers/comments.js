import { RECIVE_COMMENTS } from "../actions/comments";

export default function comments(state = {}, action) {
  switch (action.type) {
    case RECIVE_COMMENTS:
      return {
        ...action.comments
      };

    default:
      return state;
  }
}
