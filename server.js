const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose")
const userRoutes=require("./routes/userRoutes")
const { User, Message, Chat }=require("./db")
const path = require("path");


const app = express();
app.use(express.json());
app.use(
    cors({
      origin: "http://localhost:3000",
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      // <-- location of the react app were connecting to
      credentials: true,
    })
  );

app.use("/api/user", userRoutes);

app.listen(5000,console.log(`Server running on 5000`));