import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({contact}) => {
  return (
    <div className="contact" ref={contact}>
      <div className="container">
        <div className="contactSection">
          <div className="row justifyConter">
            <div className="col-6">
            <div className="common">         
              <h1 className="mainHeader">Have an idea?</h1>
            </div>
            <div className='mailNumber'>
            
              <p>
              <HiOutlineMail className="mailIcon"/>
                kiranarishanpalli@gmail.com
              </p>
              <p>
                <FaPhoneAlt className="phoneIcon"/>
                7207680184
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;