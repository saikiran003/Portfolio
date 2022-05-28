import React from "react";

const ThankyouNote = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contactSection">
          <div className="row justifyConter">
            <div className="col-6">
              <div>{/* <ContactForm/> */}</div>
              <br />
              <div className="thankYouText">
                <h1 style={{ color: "white", fontSize: "40px" }}>Thank You</h1>
                {/* <p style={{color:"white",fontSize:"30px"}}>
                  <RiSurgicalMaskLine className="headerIcon" />
                    <span>Wear Mask - Stay Safe</span>  
                  <RiSurgicalMaskLine className="headerIcon" />
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankyouNote;
