const express = require("express")
const { accessChat, fetchChats, createGroupChat, renameGroup }=require("../controllers/chatController");
const protect=require("../protect");


const router=express.Router();
 
router.route("/create").post(protect, accessChat);
router.route("/fetch").get(protect, fetchChats);
router.route("/group").post(protect, createGroupChat);
router.route("/rename").put(protect, renameGroup);
//router.route("/groupremove").put(protect, removeFromGroup);
//router.route("/groupadd").put(protect, addToGroup);

 


module.exports=router;
  