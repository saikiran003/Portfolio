import React from "react";
// import Profile_Pic from "./Profile_Pic.jpg"
import { FaLinkedinIn, FaGithub, FaMediumM } from "react-icons/fa";
// import { SiHugo } from "react-icons/si";
//import Typewriter from 'typewriter-effect';

const Head = ({about}) => {
  return (
    <div className="newHead_parent" ref={about}>
      <div className="newHead_img">
        <img
          src={process.env.PUBLIC_URL + "/profile_new.jpg"}
          alt="profile pic"
        />
      </div>
      <div className="newHead_text">
        <div className="header__section">
          <h1 style={{ color: "black", fontSize: "35px", marginTop: "10px" }}>
            Sai Kiran Arishanapalli
          </h1>
          <p
            style={{
              color: "#ff4a57",
              fontWeight: "600",
              marginBottom: "15px",
            }}
          >
            Full Stack Web Developer
          
          </p>
          <ul className="header__ul">
            <li>
              <a
                href="https://www.linkedin.com/in/sai-kiran-arishanapalli-1b7062190/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn className="headerIcon" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/saikiran003"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="headerIcon" />
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/@kiranarishanpalli"
                target="_blank"
                rel="noreferrer"
              >
                <FaMediumM className="headerIcon" />
              </a>
            </li>
            {/* <li>
                                <a href="https://hashnode.com/@janakbharadwaj95" target="_blank" rel="noreferrer"><SiHugo className="headerIcon" /></a>
                            </li> */}
          </ul>
          <br />
          <div style={{ marginBottom: "30px" }}>
            <a
              href="https://drive.google.com/file/d/1XsPRaLKL97b2DzgCe8FT17UvG5yDSprg/view?usp=sharing"
              className="btn btn-outline"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
