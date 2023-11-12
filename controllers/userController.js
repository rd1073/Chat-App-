const asyncHandler = require("express-async-handler");
const User =require("../db");
const generateToken = require("../token");



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


  module.exports={registerUser}
  