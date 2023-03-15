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




  //TEMPORARY
  const posts = [
    {
      id: 16,
      name: "John Doe",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    /* {
      id: 2,
      name: "Jane Doe",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    }, */
  ];

  return <div className="posts">
    {post.map(post=>(
      <Post getPosts={getPosts} post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;
