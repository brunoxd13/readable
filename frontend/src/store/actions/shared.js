import { getInitialData } from "../../service/api";
import { reciveCategories } from "./categories";
import { recivePosts } from "./posts";
import { setAuthedUser } from "./authedUser";
import { setLoading } from "./loading";

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ categories, posts }) => {
      dispatch(setAuthedUser("guest"));
      dispatch(reciveCategories(categories));
      dispatch(recivePosts(posts));
      dispatch(setLoading(false));
    });
  };
}
