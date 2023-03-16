import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { Button } from "@mui/material";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import "./post.scss";

const Post = ({post, getPosts}) => {
  const [commentOpen, setCommentOpen] = useState(false);

  const storedToken = localStorage.getItem("authToken");
  const addLike = async (postId) => {
console.log(storedToken)

    try {
      let response = await axios.put(
        `${process.env.REACT_APP_API}/api/likes/${postId}`, null,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );
      console.log(response)
     getPosts()
      
    } catch (error) {
      console.log(error);
    }
  };
 

  
  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.creator.profileImage} alt="" />
            <div className="details">
             {/*  <Link
                to={`/profile/${post.creator._id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              > */}
                <span className="name">{post.creator.firstName} {post.creator.lastName}</span>
             {/*</div> </Link>*/}
              <span className="date">1 min ago</span>
            </div>
          </div>
          
        </div>
        <div className="content">
          <p>{post.description}</p>
          <img className="img" src={post.imageURL} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {post.likes.length ? <FavoriteOutlinedIcon onClick={() => addLike(post._id)}/> : <FavoriteBorderOutlinedIcon onClick={() => addLike(post._id)}/>}
            {post.likes.length} Likes
          </div>
          <div className="item">
          {/* <div className="item" onClick={() => setCommentOpen(!commentOpen)}> */}
            <TextsmsOutlinedIcon />
            0 Comments
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;
