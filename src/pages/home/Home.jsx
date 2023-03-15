
import React from "react"
import { Link } from "react-router-dom"

import "./home.scss"

const Home = () => {
  return (
    <div className="home1">
   
    <div className="card">
      <div className="left">
        <h1>Cre<strong/>AI<stong/>te</h1>
        <p>
        How many times have you had an idea but could never get it into a picture?
        This is the social network for you, write down what you're thinking, generate an image and post. <br/>
        Share with your friends and the CreAite community. <br/>
        <br/>
        <b> The first social network that uses Artificial Intelligence. </b>
        </p>
        <div className="btn">
          <div className="alingn">
        <span>Don't you have an account?</span>
        <Link to="/signup">
          <button>SignUp</button>
        </Link>
        </div>
        <div className="alingn">
        <span>Already have an account?</span>
        <Link to="/login">
          <button>LogIn</button>
        </Link>
        </div>
        </div>
      </div>
      <div className="right rightbg">
      
      </div>
    </div>
  </div>
  )
}

export default Home