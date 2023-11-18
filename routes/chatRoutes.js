const express = require("express")
const { accessChat, fetchChats }=require("../controllers/chatController");
const protect=require("../protect");


const router=express.Router();
 
router.route("/create").post(protect, accessChat);
router.route("/fetch").get(protect, fetchChats);


//router.route("/login").post(loginUser);
//router.route('/search').get(protect, searchUser);


module.exports=router;
  