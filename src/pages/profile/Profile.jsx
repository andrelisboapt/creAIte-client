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
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';



const Profile = () => {
  
  const {logout} = useContext(AuthContext)

 
  const [user, setUser] = useState([]);

  

  const storedToken = localStorage.getItem("authToken");

  

  const getUser = async () => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_API}/api/profile`,
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
              {user.aboutMe}
            
          </div>
          <div className="right">
            
          </div>
          <br/>
          <Link to="/profile/edit"><button>Edit</button>  </Link>
          <Link to="/">
          <Button onClick={logout}><LogoutIcon/></Button>
          </Link>
      
        </div>
        <Gallery user={user}/>
     
      </div>
    </div>
  );
};

export default Profile;
