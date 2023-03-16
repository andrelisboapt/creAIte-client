import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./home.scss";
import "./home.css";

const Home = () => {
  useEffect(() => {
    const openNav = () => {
      document.getElementById("sidenav").style.width = "50%";
    };
    const closeNav = () => {
      document.getElementById("sidenav").style.width = "0%";
    };
    document.querySelectorAll(".menubtn, .closeBtn").forEach((el) => {
      el.addEventListener("click", () => {
        el.classList.contains("menubtn") ? openNav() : closeNav();
      });
    });
  }, []);

  return (
    <div className="fixHome homepage-container">
      <div className="fixHome homepage">
        <nav className="fixHome">
          <div className="logo fixMargins">CreAIte</div>
          {/* <!-- toggle menu button --> */}
          <span className="menubtn fixMargins">&#9776;</span>

          <div className="navLinks fixMargins">
            <ul>
              <li>
                <a href="/signup">Signup</a>
              </li>
              <button type="button">
                <a className="loginBTN" href="/login">
                  Login
                </a>
              </button>
            </ul>
          </div>
        </nav>
        {/* <!-- responsive side navbar --> */}
        <div className="sideNav" id="sidenav">
          <a className="closeBtn"> &#10006;</a>
          <a href="/signup">Signup</a>
          <a href="/login">
            <button type="button">Login</button>{" "}
          </a>
        </div>

        {/*  <!-- Header content with banner image --> */}
        <div className="row">
          <div className="column1">
            <h1>Now on Mobile!</h1>
            <p>
              Be cre<b>AI</b>tive anytime, anywhere! Download now for Android!
            </p>
            <Link
              to="../../../public/CreAIte_Android.apk"
              target="_blank"
              download="CreAIte_Android.apk"
            >
              <img
                style={{ width: 300 }}
                classeName="androidapp"
                src="https://res.cloudinary.com/deifzi7ax/image/upload/v1678925028/androidapp_dhzpb8.png"
                alt=""
              />
            </Link>
          </div>
          <div className="column2">
            <img
              src="https://res.cloudinary.com/deifzi7ax/image/upload/v1678883305/gifhome_4_wa9xn9.gif"
              alt="banner"
              width="300px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
