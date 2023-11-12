import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/login";
import Signup from "./components/signup";
import Chats from "./components/chat";
 
function App() {
  return (
    <div className="App">
       <Router>
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/chat" element={<Chats />} />

 
 
            

 


          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
