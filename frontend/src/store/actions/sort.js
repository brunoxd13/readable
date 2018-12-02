export const SORT_BY_CATEGORY = "SORT_BY_CATEGORY";
export const SORT_BY = "SORT_BY";

export function sortBy(criteria) {
  return {
    type: SORT_BY,
    criteria
  };
}

export function sortByCategory(criteria) {
  return {
    type: SORT_BY_CATEGORY,
    criteria
  };
}
