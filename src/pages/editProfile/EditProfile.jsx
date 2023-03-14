import "./editProfile.scss";
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
import { useNavigate } from "react-router-dom";


const EditProfile = () => {
    
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

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  
  const handleFirstName = (e) => setFirstName(e.target.value)
  const handleEmail = (e) => setEmail(e.target.value)
  const handleLastName = (e) => setLastName(e.target.value)
  const handleAboutMe = (e) => setAboutMe(e.target.value)
 
  const token = localStorage.getItem("authToken");
  const handleSubmit = async (e) => {
    e.preventDefault()
    const body = {email, firstName, lastName, aboutMe}

    try {
        await axios.put(`${process.env.REACT_APP_API}/api/profile/`, body, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
        }
      );
        navigate(`/profile/${userId}`)

    } catch (error) {
        console.log(error)
    }

}

  

  return (
    <div className="editProfile">
   
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
          <div className="center">
        <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name: </label>
        <input type="text" name="firstName" id="firstName" value={firstName} onChange={handleFirstName} /><br />
        <label htmlFor="lastName">Last Name: </label>
        <input type="text" name="lastName" id="lastName" value={lastName} onChange={handleLastName} /><br/>
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" value={email} onChange={handleEmail} /> <br />
        <label htmlFor="aboutMe">About Me: </label>
        <input type="text" name="aboutMe" id="aboutMe" value={aboutMe} onChange={handleAboutMe} /><br />
    
        <button type="submit">Save</button> 

    </form>
            
          </div>
         </div> 
      </div>
    </div> 
  );
};

export default EditProfile;
