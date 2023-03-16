import Post from "../post/Post";
import "./posts.scss";
import axios from "axios";
import { useContext, useState, useEffect } from "react";

const Posts = () => {

  const [post, setPost] = useState([]);
  const storedToken = localStorage.getItem("authToken");

  

  const getPosts = async () => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_API}/api/feed`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );
      console.log(response)
      setPost(response.data)
      
    } catch (error) {
      console.log(error);
    }
  }; 

  useEffect(() => {
    getPosts();

  }, []);


  const reversedPost = [...post].reverse();
  return <div className="posts">
    {reversedPost.map(post=>(
      <Post getPosts={getPosts} post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;
