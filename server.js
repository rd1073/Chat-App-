const express = require("express");
const mongoose = require("mongoose")
const userRoutes=require("./routes/userRoutes")
const { User, Message, Chat }=require("./db")


const app = express();
app.use(express.json());

app.use("/api/user", userRoutes);

const server = app.listen(5000,console.log(`Server running on 5000`));