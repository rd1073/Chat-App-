const asyncHandler = require("express-async-handler");
const { User } = require("../db");
const generateToken = require("../token");
const express = require("express");


/*
const registerUser = asyncHandler(async (req, res) => {
    const { name, phno, password} = req.body;
  
    if (!name || !phno || !password) {
      res.status(400);
      throw new Error("Please Enter all the Feilds");
    }
  
    const userExists = await User.findOne({ phno });
  
    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }
  
    const user = await User.create({
      name,
      phno,
      password,
      
    });
  
    const newUser = new User({
        name,
        phno,
        password,
      });
    
      // Save the user instance to the database
      const user = await newUser.save();


    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        phno: user.phno,
        token: generateToken(user._id),

        
        
      });
    } else {
      res.status(400);
      throw new Error("User not found");
    }
  });
*/
/*
const registerUser = async (req, res) => {
    try {
      const { name, phno, password } = req.body;
  
      if (!name || !phno || !password) {
        res.status(400);
        throw new Error("Please Enter all the Fields");
        return;

      }
  
      User.findOne({ phno }).then((doc) => {
        if (doc) {
          res.status(400);
          throw new Error("User already exists");
        } else {
          const newUser = new User({
            name,
            phno,
            password,
          });
  
          newUser.save().then((user) => {
            res.status(201).json({
              _id: user._id,
              name: user.name,
              phno: user.phno,
              token: generateToken(user._id),
            });
          });
        }
      });
    } catch (err) {
      res.status(500).send("Server error probably");
    }
  };
  
  module.exports = { registerUser };
  */

  const registerUser = async (req, res) => {
    try {
      const { name, phno, password } = req.body;
      console.log("Request Body:", req.body);

  
      if (!name || !phno || !password) {
        res.status(400).json({ error: "Please Enter all the Fields" });
        return;
      }
  
      // Check if user already exists
      const userExists = await User.findOne({ phno });
  
      if (userExists) {
        res.status(400).json({ error: "User already exists" });
        return;
      }
  
      // Create a new user instance
      const newUser = new User({
        name,
        phno,
        password,
      });
  
      // Save the user instance to the database
      newUser.save().then((user) => {
        console.log("User saved:", user);

        res.status(201).json({
          _id: user._id,
          name: user.name,
          phno: user.phno,
          token: generateToken(user._id),
        });
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Server error probably" });
    }
  };
  
  module.exports = { registerUser };
  
  
  

  
  