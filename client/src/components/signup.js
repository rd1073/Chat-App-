import React, { useState } from 'react';
  
const Signup = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

 
  const [name, setName] = useState();
  const [phno, setPhno] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [password, setPassword] = useState();
  

  const submitHandler = async () => {
     
  };

   

  return (
    <div>
      <label>Name<br /></label>
      <input
        placeholder="Enter Your Name"
        onChange={(e) => setName(e.target.value)}
      />

      <label><br />Phone Number<br /></label>
      <input
        type="text"
        placeholder="Enter Your Phone Number"
        onChange={(e) => setPhno(e.target.value)}
      />

      <label><br />Password<br /></label>
      <div>
        <input
          type={show ? 'text' : 'password'}
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </button>
      </div>

      <label>Confirm Password</label>
      <div>
        <input
          type={show ? 'text' : 'password'}
          placeholder="Confirm password"
          onChange={(e) => setConfirmpassword(e.target.value)}
        />
        <button type="button" onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </button>
      </div>

       
      <button
        style={{ marginTop: 15 }}
        onClick={submitHandler}
       >
        Sign Up
      </button>
    </div>
  );
};

export default Signup;
