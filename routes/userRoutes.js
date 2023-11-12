const express = require("express")
const { registerUser, loginUser }=require("../controllers/userController");

const router=express.Router();

router.route("/signup").post(registerUser);
router.route("/login").post(loginUser);
//router.post('/login', loginUser)
module.exports=router;
