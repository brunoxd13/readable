import { SET_LOADING } from "../actions/loading";

export default function loading(state = true, action) {
  switch (action.type) {
    case SET_LOADING:
      return action.isLoading;

    default:
      return state;
  }
}
