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



function App() {
  const {currentUser} = useContext(AuthContext);

  const { darkMode } = useContext(DarkModeContext);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
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
          element: <Home />,
        },
        {
          path: "/profile/:userId",
          element: <Profile />,
        },
        
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/generator",
          element: <Generator />,
        },
        {
          path: "/post/create",
          element: <CreatePost />,
        },
        {
          path: "/profile/edit",
          element: <EditProfile />,
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
