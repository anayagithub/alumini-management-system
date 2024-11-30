import mongoose from "mongoose";

const MessageModel = mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  reciever: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  chat:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Chat",
  }
},{
    timeStamp:true,

});

const Message=mongoose.Model("Message",MessageModel);
module.exports=Message;

