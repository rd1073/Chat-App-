import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [phno, setPhno] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
 
  const handleClick = () => setShow(!show);

  const submitHandler = async () => {
    if (!phno || !password) {
      console.log("please fill all the fields");
       return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:5000/api/user/login",
        {
        
          phno,
          password,
          
        },
        config
      );
      console.log(data);
      console.log("login succesfull");
      localStorage.setItem("userInfo", JSON.stringify(data));
      
      navigate('/chat');
    } catch (error) {
      console.log(error);
     }
  };

  return (
    <div>
      <label>Phone No</label>
      <input
        value={phno}
        type="text"
        placeholder="Enter Your Phone Number"
        onChange={(e) => setPhno(e.target.value)}
      />

      <label><br />Password</label>
      <div>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={show ? 'text' : 'password'}
          placeholder="Enter password"
        />
        <button type="button" onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </button>
      </div>

      <button
        style={{ marginTop: 15 }}
        onClick={submitHandler}
       >
        Login
      </button>

      <div >
          Not a user? <a href="/signup">Register now</a>
        </div>
             
    </div>
  );
};

export default Login;
