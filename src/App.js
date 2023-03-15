import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import "./style.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";
import Private from "./components/Private";
import Generator from "./pages/generator/Generator";
import CreatePost from "./pages/createPost/CreatePost";
import EditProfile from "./pages/editProfile/EditProfile";
import Feed from "./pages/feed/Feed";
import Anon from "./components/Anon";


function App() {
  const {loggedIn} = useContext(AuthContext);
console.log(loggedIn)
  const { darkMode } = useContext(DarkModeContext);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        {loggedIn && <Navbar />}

        <div style={{ display: "flex" }}>
        {loggedIn && <LeftBar />}
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
        </div>
      </div>
    );
  };



  const router = createBrowserRouter([
    {
      path: "/",
      element: (
       
          <Layout />
        
      ),
      children: [
        {
          path: "/",
          element: [
            <Anon>
          <Home />
          </Anon>
          ]

        },
        {
          path: "/profile",
          element: [
            <Private>
            <Profile />
            </Private>
          ]
        },
        
        {
          path: "/login",
          element: [
            <Anon>
          <Login />
          </Anon>
          ]
        },
        {
          path: "/signup",
          element: [
            <Anon>
          <Signup />
          </Anon>
          ]
        },
        {
          path: "/generator",
          element:[
            <Private>
            <Generator />
            </Private>
          ] 
        },
        {
          path: "/post",
          element: [
            <Private>
            <CreatePost />
            </Private>

          ]
        },
        {
          path: "/profile/edit",
          element: [
<Private>
<EditProfile />

</Private>

          ]
        },
        {
          path: "/feed",
          element: [
            <Private>
          <Feed />

            </Private>
          ]
        },
      ],
      
    },
  ]);
  

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
