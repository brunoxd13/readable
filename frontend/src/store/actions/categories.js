import * as Api from "../../service/api";

export const RECIVE_CATEGORIES = "RECIVE_CATEGORIES";

export function reciveCategories(categories) {
  return {
    type: RECIVE_CATEGORIES,
    categories
  };
}

export const fetchCategories = () => {
  return dispatch => {
    return Api.getCategories().then(categories =>
      dispatch(reciveCategories(categories))
    );
  };
};
