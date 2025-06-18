import { createContext, useReducer, useEffect } from "react";

// Default context value
const DEFAULT_CONTEX = {
  postList: [],
  addPost: () => {},
  deletePost: () => {},
};

// Create context
export const PostList = createContext(DEFAULT_CONTEX);

// Initial post list
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi Friend, I am going to Mumbai",
    reaction: "20",
    userId: "user1",
    tags: ["vacation", "mumbai", "Enjoy"],
  },
];



// Reducer function
const postListReducer = (currPostList, action) => {
  if (action.type === "DELETE_POST") {
    return currPostList.filter(
      (post) => post.id !== action.payload.postId );
  } else if (action.type === "ADD_POST") {
    return [action.payload, ...currPostList];
  }else if (action.type==="SET_POSTS"){
    return action.payload;
  }

  return currPostList; // default return
};

// Provider component
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);
  

  const addPost = (userId, postBody, postTitle, reaction, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reaction: reaction,
        userId: userId,
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  // Load data from API
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        dispatchPostList({
          type: "SET_POSTS",
          payload: data.posts,
          
        });
        
      });
  }, []);

  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
