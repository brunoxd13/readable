export const SORT_BY = "SORT_BY";

export function sortBy(criteria) {
  return {
    type: SORT_BY,
    criteria
  };
}
