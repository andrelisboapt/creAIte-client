

import CreateCard from "../../components/createCard/CreateCard"
import { useContext, useState, useEffect } from "react";
import "./createPost.scss"
import axios from "axios";
import { useNavigate, useParams, useLocation } from "react-router-dom";



const CreatePost = () => {

  const navigate = useNavigate();
  const [description, setDescription] = useState("");
  let {state} = useLocation()
  const imageURL = state.imageURL
  
  
  const handleDescription = (e) => setDescription(e.target.value)




  const token = localStorage.getItem("authToken");



  const handleSubmit = async (e) => {
    e.preventDefault()
    const body = {description, imageURL}

    try {
        await axios.post(`${process.env.REACT_APP_API}/api/post/create`, body, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
        }
      );
   
        
    } catch (error) {
        console.log(error)
    }
  }


  return (
    <div className="home">

<img src={imageURL}/>


     <form onSubmit={handleSubmit}>
        <label htmlFor="description">Description: </label>
        <input type="text" name="description" id="description" value={description} onChange={handleDescription} /><br />
       
        <button type="submit">Save</button> 
        </form>
     <CreateCard/> 
    </div>
  )
}

export default CreatePost