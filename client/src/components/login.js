import React, { useState } from 'react';

const Login = () => {
  const [phno, setPhno] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = () => setShow(!show);

  const submitHandler = () => {
    // Your logic for handling the login
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
