import mongoose from "mongoose";
const UserModel= mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    }
},{
    timeStamp:true,

});

const User=mongoose.Model("User",UserModel);
module.exports=User;


// 7eongBgEYyplVJ6z