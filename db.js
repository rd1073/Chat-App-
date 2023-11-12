const mongoose = require("mongoose")

const conn = mongoose.createConnection('mongodb://0.0.0.0:27017/Chatapp');
conn.on('connected', () => {
  console.log('Mongoose connected mongodb');
});
conn.on('error', (err) => {
  console.error(`Mongoose connection error: ${err}`);
});


//user module
const userSchema = new mongoose.Schema(
    {
      name: { type: "String", required: true },
      phno: { type: "String", unique: true, required: true },
      password: { type: "String", required: true },
      isAdmin: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
    { timestaps: true }
  );
  
const User = conn.model("User", userSchema);
  
  module.exports = User;


  //chat module
const chatModel = new mongoose.Schema(
    {
      chatName: { type: String, trim: true },
      isGroupChat: { type: Boolean, default: false },
      users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
       
      groupAdmin: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    },
    { timestamps: true }
  );
  
  const Chat = conn.model("Chat", chatModel);
  
  module.exports = Chat;

 
  //messages module
const messageSchema = new mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: { type: String, trim: true },
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
    readBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const Message = conn.model("Message", messageSchema);
module.exports = Message; 

