import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthWrapper } from "./context/authContext";
import { DarkModeContextProvider } from "./context/darkModeContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
    
      <AuthWrapper>
        <App />
      </AuthWrapper>
      
    </DarkModeContextProvider>
  </React.StrictMode>
);
