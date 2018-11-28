export const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const truncateString = (string, length) => {
  if (length > string.length) {
    return string;
  }

  return string
    .substring(0, length)
    .trim()
    .concat("...");
};
