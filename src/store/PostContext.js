import { createContext, useState } from "react";

export const PostContext = createContext(null);

function Post({ children }) {
    console.log('enter');
    const [postDetails, setPostDetails] = useState();
    console.log(postDetails,".............");
  return (
    <PostContext.Provider value={{ postDetails, setPostDetails }}>
      {children}
    </PostContext.Provider>
  );
}

export default Post;
