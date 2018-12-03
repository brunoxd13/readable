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

export const arrayToObject = array => {
  return array.reduce((objects, current) => {
    objects[current.id] = current;
    return objects;
  }, {});
};

export const generateId = () => {
  return Math.random()
    .toString(36)
    .substr(-8);
};

export const getDateFromTimestamp = timestamp => {
  return new Date(timestamp).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
};

export const orderPost = (posts, orderBy) => {
  if (orderBy === "newest") {
    return Object.values(posts).sort((post1, post2) => {
      return post2.timestamp - post1.timestamp;
    });
  } else if (orderBy === "oldest") {
    return Object.values(posts).sort((post1, post2) => {
      return post1.timestamp - post2.timestamp;
    });
  } else if (orderBy === "famous") {
    return Object.values(posts).sort((post1, post2) => {
      return post2.voteScore - post1.voteScore;
    });
  } else if (orderBy === "infamous") {
    return Object.values(posts).sort((post1, post2) => {
      return post1.voteScore - post2.voteScore;
    });
  }
};
