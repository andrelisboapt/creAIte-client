import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import { Link as Rink } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
import axios from "axios";
import { useParams } from "react-router-dom";

import { Button } from "@mui/material";
import {Link} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PublicIcon from '@mui/icons-material/Public';


const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  
  


  
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
      
      setUser(response.data);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();

  }, []);

  return (
    <div className="navbar">
      <div className="left">
        <Rink to="/" style={{ textDecoration: "none" }}>
          <span>CreAIte</span>
        </Rink>
        <Link href="/profile" underline="none" color="inherit">
        <AccountCircleIcon />
        </Link>
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )}
        <Link href="/generator" underline="none" color="inherit">
        <CameraEnhanceIcon/>
        </Link>
        <Link href="/feed" underline="none" color="inherit">
        <PublicIcon/>
        </Link>
        
       
      </div>
      <div className="right">
       
       
        <div className="user">
        <h2>{user.firstName}</h2>
          <img
            src={user.profileImage}
            alt=""
          />
          
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
