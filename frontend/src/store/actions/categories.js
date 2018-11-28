import * as Api from "../../service/api";

export const GET_CATEGORIES = "GET_CATEGORIES";

export function getCategories(categories) {
  return {
    type: GET_CATEGORIES,
    categories
  };
}

export const fetchCategories = () => {
  return dispatch => {
    return Api.getCategories().then(categories =>
      dispatch(getCategories(categories))
    );
  };
};
