import './App.css'
import {Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import EditProfile from './pages/EditProfile'
import Generator from './pages/Generator'
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'
import CommentPage from './pages/CommentPage'
import Navbar from './components/Navbar'





function App() {
  

  return (
    <div className="App">
    <Navbar /> 


    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/profile/edit" element={<EditProfile />}/>
      <Route path="/generator" element={<Generator />}/>
      <Route path="/post/create" element={<CreatePost />}/>
      <Route path="/feed" element={<Feed />}/>
      <Route path="/feed/post/comment" element={<CommentPage />}/>
    </Routes>
      
      
    </div>
  )
}

export default App
