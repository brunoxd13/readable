import React from "react";
import PropTypes from "prop-types";
import Post from "../Post";

const PostList = ({ posts }) =>
  Object.values(posts).map(post => {
    return <Post key={post.id} post={post} isOnly={false} />;
  });

PostList.propTypes = {
  posts: PropTypes.object.isRequired
};

export default PostList;
