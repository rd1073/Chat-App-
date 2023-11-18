;
const { User } = require("../db");
const generateToken = require("../token");
 const bcrypt = require("bcrypt");

  
//register user
//api route api/user/login
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
  
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user instance
      const newUser = new User({
        name,
        phno,
        password:hashedPassword,
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
  

  //login user
  //api route api/user/login
  const loginUser = async (req, res) => {
    try {
      const { phno, password } = req.body;
      console.log("Request Body:", req.body);

  
      if (!phno || !password) {
        res.status(400).json({ error: "Please Enter all the Fields" });
        return;
      } 
  
      // Check if user already exists
      const user = await User.findOne({ phno });
  
      if (user && (await bcrypt.compare(password, user.password))) {
        console.log("login succesful");
        res.json({
            _id: user._id,
            name: user.name,
            phno: user.phno,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
          });
      } else{
        res.status(401);
        throw new Error("Invalid Email or Password");

      }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error probably" });
}};

//search user
// api route api/user/search
const searchUser = async (req, res, next) => {
    const keyword = req.query.search
    ? { phno: { $regex: req.query.search, $options: "i" }, _id: { $ne: req.user._id } }
    : { _id: { $ne: req.user._id } };
    
  const users = await User.find(keyword);
  console.log("found user")
  res.send(users);
} 
      
   

  module.exports = { registerUser, loginUser, searchUser };
  
  
  

  
  