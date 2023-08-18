import { useSelector } from 'react-redux';
import { selectAllPost } from './postSlice';
import PostAuthor from './postAuthor';
import TimeAgo from './TimeAgo';




const PostList = () => {
  const posts = useSelector(selectAllPost);

  const renderPost = posts.map((post) => (
    <div className="post" key={post.id}>
      <h2 className="post-title">{post.title}</h2>
      <p className="post-content">{post.content}</p>
      <p>
        <PostAuthor userId={post.userId}/>
        <TimeAgo timestamp={post.date}/>
       
        
      </p>

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
