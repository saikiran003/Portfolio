import React from "react";

const About = () => {
  return (
    <div className="about" >
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "20px 20px",
          }}
        >
          {/* <div className="col-6">
            <div className="about__img">
              <img src="/images/slack_pic.png" alt="profile pic" />
            </div>
          </div> */}
          <div className="col-6">
            <div className="about__info">
              <h1 style={{ color: "rgb(255,74,87)" }}>About Me</h1>
              <div className="about__info-p1">
                Observant and detail-oriented aspiring Full-Stack Web Developer with
                specialization in Frontend. Self-Motivated and keen to learn new
                things. Looking forward to sharpen my skills in a challenging
                work environment.
              </div>
              {/* <div className="about__info-p2">
                I preffer Gardening, cooking in free time, worked as volunteer
                to help animals out my love towards them, I build web pages with
                ample knowledge of HTML,CSS, JavaScript, React, Node, MongoDB
                and various popular frameworks like Material UI, Antdesign.
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
