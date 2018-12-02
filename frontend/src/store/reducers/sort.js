import { SORT_BY_CATEGORY, SORT_BY } from "../actions/sort";

export default function sort(state = {}, action) {
  switch (action.type) {
    case SORT_BY_CATEGORY:
      return {
        ...state,
        category: action.criteria
      };

    case SORT_BY:
      return {
        ...state,
        orderBy: action.criteria
      };

    default:
      return state;
  }
}
