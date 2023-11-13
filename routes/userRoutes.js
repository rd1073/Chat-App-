const express = require("express")
const { registerUser, loginUser, searchUser }=require("../controllers/userController");
const protect=require("../protect");
console.log(typeof protect);

const router=express.Router();
 
router.route("/signup").post(registerUser);
router.route("/login").post(loginUser);
router.route('/search').get(protect, searchUser);
module.exports=router;
  