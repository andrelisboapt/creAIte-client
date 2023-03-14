import "./createCard.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CreateCard = () => {
  const [commentOpen, setCommentOpen] = useState(false);

  
  const [user, setUser] = useState([]);

  let { userId } = useParams();

  const storedToken = localStorage.getItem("authToken");

  

  const getUser = async () => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_API}/api/profile/${userId}`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );
      console.log(response)
      setUser(response.data);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();

  }, []);

 

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={user.profileImage} alt="" />
            <div className="details">
              <Link
                to={`/profile/${userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{user.firstName}</span>
              </Link>
              <span className="date"></span>
            </div>
          </div>
        </div>
        <div className="content">
          <img src="" alt="" />
          {/* <p>{post.desc}</p> */}
        </div>
        
      </div>
    </div>
  );
};

export default CreateCard;