import { useContext } from "react";
import Post from "./Post";
import{PostList as PostListData} from "../Store/Post-list-store";

const PostList=()=>{
  const {postList, deletePost }=useContext(PostListData)
  return(
    <>
    {postList.map((post)=>{
      return(
      <Post key={post.id} post={post}  deletePost={deletePost} />
    );
    })}
  
    </>

  );
}

export default PostList;