import { SORT_BY } from "../actions/sort";

export default function sort(state = { orderBy: "newest" }, action) {
  switch (action.type) {
    case SORT_BY:
      return {
        ...state,
        orderBy: action.criteria
      };

    default:
      return state;
  }
}
