const express = require("express");
const mongoose = require("mongoose")

const { User, Message, Chat }=require("./db")


const app = express();


const server = app.listen(5000,console.log(`Server running on 5000`));