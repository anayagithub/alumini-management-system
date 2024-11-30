import express from "express";
import { configDotenv } from "dotenv";
import mongoose, { mongo } from "mongoose";
configDotenv();
const app=express();
const PORT=process.env.PORT || 4000;

const connectDB= async()=>{
    try {
        const connect=await mongoose.connect(process.env.MONGODB_URL);
        console.log("server is connected to database");        
    } catch (error) {
        console.log("Server is not connected",error.message);
    }
}
connectDB();

app.get("/",(req,res)=>{
    res.send("running")
})
// console.log(process.env.MONGODB_URL);

app.listen(PORT,()=>{
    console.log(`Sever is running on port ${PORT}`)
})