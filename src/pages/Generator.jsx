import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

  
 

function Generator() {
  const [search, setSearch] = useState(null)
  const [searchResult, setSearchResult] = useState("");
  const [selected, setSelected] = useState("")
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (e) => setSearch(e.target.value)
  const handleSelected = (e) => setSelected(e.target.value)
    
  const token = localStorage.getItem("authToken");

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      
      
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/generator`, {search}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      
      setSearchResult(response.data)
  
    } catch (error) {
      
       console.log(error)
    }



  }
  const handleAdd = async (e) => {
    e.preventDefault()

    try {
      
      setIsLoading(true)

      const ApiResponse = await axios.put(`${import.meta.env.VITE_API_URL}/api/gallery`, {selected},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      
      setSelected(searchResult)
console.log(searchResult)

setIsLoading(false);
/* navigate('/'); */
    } catch (error) {
      setIsLoading(false);
       console.log(error)
    }

  }

  const navigate = useNavigate()

  return (
    <div>
      <h1>Image Generator</h1>
      <div>
        <form onSubmit={handleSubmit}>
        <label htmlFor='search'>Search</label>
        <input type="text" name="search" id="search" value={search} onChange={handleSearch} />
        <button type="submit">Generate</button>


        </form>
      </div>
    <div>
      {isLoading && searchResult ? (
        <>
        <p>Loading...</p>
        <p>Please wait until your image is ready.</p>

        </>
      ) : ( 
      
      
      <div class="container">
        <form onSubmit={handleAdd}>
        <input type="checkbox" id="myCheckbox1" value={selected} onChange={handleSelected} />
        <label for="myCheckbox1"><img src={searchResult} /></label>
        <button type="submit">Save</button>
        </form> 
    </div>
      )}
      </div>
      </div>
  )
      
    

  
      
    
  
};
    
export default Generator