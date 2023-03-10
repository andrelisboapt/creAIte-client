import React, {useState} from 'react'
import { Configuration, OpenAIApi} from "openai";

  
  const configuration = new Configuration({
    apiKey:import.meta.env.VITE_API_KEY,
  
  });
  
  const openai = new OpenAIApi(configuration)

function Generator() {
    const [image, setImage] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState("")

    const generateImage = async () =>{
    try {
        setIsLoading(true)
        const response = await openai.createImage({
            prompt: search,
            n: 1,
            size: "256x256",
           })
console.log(response)
           setImage(response.data.data[0].url)
           setIsLoading(false)
    
    
    
    } catch (error) {
        setIsLoading(false);
        console.log(error)
    }}


  return (
    <div>
      <h1>Image Generator</h1>
      <div>
        <input placeholder="Enter your search" onChange={(e) => setSearch(e.target.value)}/>
      <button onClick={generateImage}>Generate</button>
      </div>
      <div>
      {isLoading ? (
        <>
        <p>Loading...</p>
        <p>Please wait until your image is ready.</p>

        </>
      ) : (
        <img src={image} alt="" />
      )}
      </div>
    </div>
  )
}

export default Generator