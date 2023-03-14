import "./gallery.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useState, useEffect } from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Gallery = () => {
    
  const [user, setUser] = useState([]);
  const [gallery, setGallery] = useState([])
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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
      setGallery(response.data.gallery)
      setLoading(false)
      
      
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  };
 
  


  useEffect(() => {
    getUser();

  }, []);


  const deleteImage = async (imgId) => {
    try {
        await axios.delete(`${process.env.REACT_APP_API}/api/gallery/${imgId}`,
        {
            headers: { Authorization: `Bearer ${storedToken}` },
          });
        getUser()
    } catch (error) {
        console.log(error)
    }
}

  return (
    <div className="post">
      <div className="container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {gallery.length === 0 ? (
              <p>No images found in gallery.</p>
            ) : (
              <ImageList sx={{ maxWidth: '100%', height: '10%' }}>
                <ImageListItem key="Subheader" cols={2}>
                  
                </ImageListItem>
                {gallery.map((item) => (
                  <ImageListItem key={item.imageURL}>
                    <img
                      src={`${item.imageURL}?w=248&fit=crop&auto=format`}
                      srcSet={`${item.imageURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.imageURL}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      actionIcon={
                        <ButtonGroup
                          variant="text"
                          aria-label="text button group"
                        >
                          <Button onClick={() => deleteImage(item._id)}>Delete</Button>
                          <Button>Update photo</Button>
                          <Button>Post</Button>
                        </ButtonGroup>
                      }
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Gallery;





