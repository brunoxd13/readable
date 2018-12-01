const api = "http://localhost:3001";

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

export const getPost = id => {
  return fetch(`${api}/posts/${id}`, { headers })
    .then(res => res.json())
    .then(data => data.posts);
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

export const updatePost = ({ title, body, category, author, id }) => {
  return fetch(`${api}/posts/${id}`, {
    method: "PUT",
    headers: writeHeaders,
    body: JSON.stringify({ title, body, category, author })
  }).then(res => res.json());
};

export const upVote = (id, entity = "post") => vote(id, "upVote", entity);
export const downVote = (id, entity = "post") => vote(id, "downVote", entity);

const vote = (id, option, entity) =>
  fetch(`${api}/${entity}s/${id}`, {
    method: "POST",
    headers: writeHeaders,
    body: JSON.stringify({ option })
  }).then(res => res.json());

export const updateComment = (id, body) => {
  return fetch(`${api}/comments/${id}`, {
    method: "PUT",
    headers: writeHeaders,
    body: JSON.stringify({ id, body })
  }).then(res => res.json());
};

export const updateOrCreateComment = comment => {
  if (comment.id) {
    return updateComment(comment);
  }

  return createComment({
    ...comment,
    id: token,
    timestamp: Date.now()
  });
};

export const updateOrCreatePost = post => {
  if (post.id) {
    return updatePost(post);
  }

  return createPost({
    ...post,
    id: token,
    timestamp: Date.now()
  });
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
