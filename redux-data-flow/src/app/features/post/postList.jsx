import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllPost } from './postSlice';


const PostList = () => {
  const posts = useSelector(selectAllPost);

  const renderPost = posts.map((post) => (
    <div className="post" key={post.id}>
      <h2 className="post-title">{post.title}</h2>
      <p className="post-content">{post.content}</p>
    </div>
  ));

  return (
    <div className="post-list">
      <h1 className="list-title">Posts</h1>
      {renderPost}
    </div>
  );
};

export default PostList;
