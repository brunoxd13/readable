import { combineReducers } from "redux";
import categories from "./categories";
import posts from "./posts";
import comments from "./comments";
import sort from "./sort";
import authedUser from "./authedUser";
import loading from "./loading";

export default combineReducers({
  categories,
  posts,
  comments,
  sort,
  authedUser,
  loading
});
