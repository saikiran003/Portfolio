import React from "react";


const initData = {
  name: "",
  email: "",
  message: "",
};

const ContactFrom = () => {
  const [data, setData] = React.useState(initData);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const onSubmitHandler=async(e)=>{
    e.preventDefault();
    
  }

  const { name, email, message } = data;

  return (
    <div className='contactFormParent'>
      <form className="form" onSubmit={onSubmitHandler}>
        <h1 style={{color:"#ff4a57"}}>Drop a mail</h1>
        <input
          placeholder="Name"
          name='name'
          onChange={onChangeHandler}
          value={name}
        />
        <input
          placeholder="Email"
          name='email'
          onChange={onChangeHandler}
          value={email}
        />
        <textarea
          placeholder="Message"
          value={message}
          name="message"
          onChange={onChangeHandler}
        ></textarea>
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
};

export default ContactFrom;