import { getInitialData } from "../../service/api";
import { reciveCategories } from "./categories";
import { recivePosts } from "./posts";
import { setAuthedUser } from "../actions/authedUser";

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ categories, posts }) => {
      dispatch(reciveCategories(categories));
      dispatch(recivePosts(posts));
      dispatch(setAuthedUser("guest"));
    });
  };
}
