const api =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_URL_PROD
    : process.env.REACT_APP_API_URL_DEV;

let token = localStorage.token;

if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token
};

const writeHeaders = {
  ...headers,
  "Content-Type": "application/json"
};

export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories);

export const getPosts = category => {
  const uri = [api, category, "posts"].filter(x => x).join("/");
  return fetch(uri, { headers })
    .then(res => res.json())
    .then(data => data);
};

export const getComments = id => {
  return fetch(`${api}/posts/${id}/comments`, { headers })
    .then(res => res.json())
    .then(data => data);
};

export const createPost = post =>
  fetch(`${api}/posts`, {
    method: "POST",
    headers: writeHeaders,
    body: JSON.stringify(post)
  })
    .then(res => res.json())
    .then(data => data);

export const createComment = comment =>
  fetch(`${api}/comments`, {
    method: "POST",
    headers: writeHeaders,
    body: JSON.stringify(comment)
  })
    .then(res => res.json())
    .then(data => data);

export const updatePost = (id, title, body, category) => {
  return fetch(`${api}/posts/${id}`, {
    method: "PUT",
    headers: writeHeaders,
    body: JSON.stringify({ title, body, category })
  }).then(res => res.json());
};

const vote = (id, option, entity) =>
  fetch(`${api}/${entity}s/${id}`, {
    method: "POST",
    headers: writeHeaders,
    body: JSON.stringify({ option })
  }).then(res => res.json());

export const upVote = (id, entity = "post") => vote(id, "upVote", entity);
export const downVote = (id, entity = "post") => vote(id, "downVote", entity);

export const updateComment = (id, body) => {
  return fetch(`${api}/comments/${id}`, {
    method: "PUT",
    headers: writeHeaders,
    body: JSON.stringify({ id, body })
  }).then(res => res.json());
};

export const deletePost = id =>
  fetch(`${api}/posts/${id}`, {
    method: "DELETE",
    headers
  }).then(res => res.json());

export const deleteComment = commentId =>
  fetch(`${api}/comments/${commentId}`, {
    method: "DELETE",
    headers
  }).then(res => res.json());

export function getInitialData() {
  return Promise.all([getCategories(), getPosts()]).then(
    ([categories, posts]) => ({
      categories,
      posts
    })
  );
}
