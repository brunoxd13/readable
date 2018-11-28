import { RECIVE_POSTS } from "../actions/post";

export default function posts(state = {}, action) {
  switch (action.type) {
    case RECIVE_POSTS:
      return {
        ...state,
        ...action.posts
      };

    default:
      return state;
  }
}
