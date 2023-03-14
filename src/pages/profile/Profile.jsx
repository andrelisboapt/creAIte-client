import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts"
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/authContext";
import { useParams } from "react-router-dom";
import Gallery from "../../components/gallery/Gallery";
import { navigate } from "react-router-dom";

const Profile = () => {
  
 
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
    <div className="profile">
    {user && (
      <>
    <h1>Hi, {user.firstName}</h1>
    </>
    )}
      <div className="images">
      
        <img
          src="https://wallpaperaccess.com/full/8351209.gif"
          alt=""
          className="cover"
        />
        <img
          src={user.profileImage}
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>{user.firstName} {user.lastName}</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>PT</span>
              </div>
            </div>
            
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
          <br/>
          <button>Edit</button>  
        
      
        </div>
        <Gallery user={user}/>
       
      </div>
    </div>
  );
};

export default Profile;
