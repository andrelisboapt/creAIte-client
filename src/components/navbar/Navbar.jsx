import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
import axios from "axios";
import { useParams } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from "@mui/material";


const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  
  const {logout} = useContext(AuthContext)



  
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

  }, [logout]);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>CreAIte</span>
        </Link>
        <HomeOutlinedIcon />
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )}
        <Link to="/generator"style={{ textDecoration: "none" }}>
        <CameraEnhanceIcon/>
        </Link>
       
      </div>
      <div className="right">
       
       
        <div className="user">
        <h2>{user.firstName}</h2>
          <img
            src={user.profileImage}
            alt=""
          />
          <Link to="/"style={{ textDecoration: "none" }}>
          <Button onClick={logout}><LogoutIcon/></Button>
          </Link>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
