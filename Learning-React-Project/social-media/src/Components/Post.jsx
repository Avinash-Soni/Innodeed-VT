import { AiFillDelete } from "react-icons/ai";

const Post = ({ post, deletePost }) => {
  const handleDelete = () => {
    deletePost(post.id);
  }
  return(

    <div className="card post-card" style={{width:"60rem"}}>
  <div className="card-body">
    <h5 className="card-title">{post.id}</h5>
    <h5 className="card-title">{post.title}</h5>
    <p className="card-text">{post.body}</p>
    
        <p className="card-text"><strong>User:</strong> {post.userId}</p>
        <p className="card-text"><strong>Reactions:</strong> {post.reaction}</p>
        
    <p className="card-text"><strong>Tags:</strong>
        
          {post.tags.map((tag, index) => (
            <a key={index} href="#" className="btn btn-sm btn-outline-primary me-1 mb-1">
              {tag}
            </a>
          ))}
          <button onClick={handleDelete} className="btn btn-danger mt-2"><AiFillDelete /></button>
        </p>
  </div>
</div>

  );
}

export default Post;