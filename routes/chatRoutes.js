const express = require("express")
const { accessChat }=require("../controllers/chatController");
const protect=require("../protect");


const router=express.Router();
 
router.route("/create").post(protect, accessChat);

//router.route("/login").post(loginUser);
//router.route('/search').get(protect, searchUser);
module.exports=router;
  