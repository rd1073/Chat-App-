import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';




  
const Signup = () => {
  const navigate = useNavigate();


  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [phno, setPhno] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [password, setPassword] = useState();
  const handleClick = () => setShow(!show);


  const submitHandler = async () => {
    if (!name || !phno || !password || !confirmpassword) {
      console.log("please fill all the fields");
       return;
    }
    if (password !== confirmpassword) {
      console.log("passwords do not match");

      return;
    }
    console.log(name, phno, password);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:5000/api/user/signup",
        {
          name,
          phno,
          password,
          
        },
        config
      );
      console.log(data);
      console.log("regitration succesful");
      localStorage.setItem("userInfo", JSON.stringify(data));
      
      navigate('/chat');
    } catch (error) {
      console.log(error);
     }




     
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
