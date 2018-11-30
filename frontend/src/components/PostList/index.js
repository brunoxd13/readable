import React from "react";
import Post from "../Post";

const PostList = ({ posts }) =>
  Object.values(posts).map(post => {
    return <Post key={post.id} post={post} isOnly={false} />;
  });

export default PostList;
