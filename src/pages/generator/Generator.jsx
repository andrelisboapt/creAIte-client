/* import "./generator.scss" */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./generator.scss"

function Generator() {
  const [search, setSearch] = useState(null);
  const [searchResult, setSearchResult] = useState([]);

  const [selected, setSelected] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (e) => setSearch(e.target.value);
  const handleSelected = (e) => {
    if (e.target.checked) {
      setSelected([...selected, e.target.value]);
    } else {
      const removeFromArray = selected.filter((img) => img != e.target.value);
      setSelected(removeFromArray);
    }
  };

  const token = localStorage.getItem("authToken");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/api/generator`,
        { search },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSearchResult(response.data);
      console.log("search results", response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleAdd = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const apiResponse = await axios.put(
        `${process.env.REACT_APP_API}/api/gallery`,
        { selected },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("handleAdd data", apiResponse.data);
      //setSelected(apiResponse.data);

      setIsLoading(false);
      navigate("/profile");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const navigate = useNavigate();

    return (
      <div className="generator">
      
        <h1>Image Generator</h1>
        <div className="generatorHeader">
          <form onSubmit={handleSubmit}>
            <div className="search">
              <SearchOutlinedIcon />
              <input
                type="text"
                placeholder="Be creative in your research..."
                value={search}
                onChange={handleSearch}
              />
            </div>
               <button className="generateBtn" type="submit">Generate</button>
            
          </form>
        </div>
        <div>
          {isLoading && searchResult.length ? (
            <>
              <p>Loading...</p>
              <p>Please wait until your image is ready.</p>
            </>
          ) : (
            <div className="container">
              <form onSubmit={handleAdd}>
                <div className="genImgs">
                  {searchResult.map((result, index) => {
                    return (
                      <>
                        <input
                          type="checkbox"
                          id={`myCheckbox${index}`}
                          value={result._id}
                          onChange={handleSelected}
                        />
                        <label htmlFor={`myCheckbox${index}`}>
                          <img src={result.imageURL} />
                        </label>
                      </>
                    );
                  })}
                </div>
                  <div className="generateBtn">
                {searchResult.length > 0 && (
                  <button type="submit">Save</button>
                )}
                  </div>
              </form>
            </div>
          )}
        </div>
      </div>
    );
    }
    
    export default Generator;