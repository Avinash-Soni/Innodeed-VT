import { useContext, useRef } from "react";
import { PostList } from "../Store/Post-list-store";
import {  useNavigate } from "react-router-dom";

const CreatePost=()=>{

  const {addPost}=useContext(PostList);
  const navigate=useNavigate();


  const userIdElement=useRef();
  const postTitleElement=useRef();
  const postBodyElement=useRef();
  const reactionElement=useRef();
  const tagsElement=useRef();

  const handleSubmit=(event)=>{
    event.preventDefault();
    const userId=userIdElement.current.value;
    const postTitle= postTitleElement.current.value;
    const postBody=postBodyElement.current.value;
    const reaction= reactionElement.current.value;
    const tags= tagsElement.current.value.trim().split(/\s+/);

    userIdElement.current.value="";
    postTitleElement.current.value="";
    postBodyElement.current.value="";
    reactionElement.current.value="";
    tagsElement.current.value="";

    addPost(userId, postBody,postTitle,reaction,tags);

    navigate("/")
    
  };

  return(
    <div className="post-card">
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
    <label htmlFor="userId" className="form-label">User Id</label>
    <input type="text" ref={userIdElement} className="form-control" placeholder="Enter User Id" id="userId" aria-describedby="emailHelp"/>

    <label htmlFor="reaction" className="form-label">Reactions</label>
    <input type="text" ref={reactionElement} className="form-control" placeholder="How many people reacted to this post" id="reaction" aria-describedby="emailHelp"/>

  
    <label htmlFor="title" className="form-label">Post Title</label>
    <input type="text" ref={postTitleElement} className="form-control" placeholder="How are you feeling today..." id="title" aria-describedby="emailHelp"/>

    
    <label htmlFor="body" className="form-label">Post Content</label>
    <textarea type="text" ref={postBodyElement} className="form-control" placeholder="Tell us more about it" id="body" aria-describedby="emailHelp" rows="4" />

    <label htmlFor="tags" className="form-label">Hashtags</label>
    <input type="text" ref={tagsElement} className="form-control" placeholder="Please Inter tags using space " id="tags" aria-describedby="emailHelp"/>
   </div>
   <button type="submit" className="btn btn-primary" >Post</button>
</form>
</div>


  );
}

export default CreatePost;