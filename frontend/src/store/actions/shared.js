import { getInitialData } from "../../service/api";
import { reciveCategories } from "./categories";
import { recivePosts } from "./post";

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ categories, posts }) => {
      dispatch(reciveCategories(categories));
      dispatch(recivePosts(posts));
    });
  };
}