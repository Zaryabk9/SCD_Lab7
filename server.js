import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
const app = express();
dotenv.config();

const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO);
      console.log("Connected to mongoDB.");
    } catch (error) {
      throw error;
    }
  };
  
  mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  });
  
  mongoose.connection.on("connected", () => {
    console.log("mongoDB connected!");
  });
  
  app.get("/",function(req,res){
      
    res.sendFile(__dirname+"/public.html");
    
     
    
    })
    
    app.post("/",function(req,res){
    
     var user = new userModel({
      name: req.body.uname
       });
  
      user.save();
      
      res.send("<h1>Your username '"+req.body.uname+"' has been stored in the DB. </h1>")
     
    
    })
    
    app.listen(3000, () => {
      connect();
      console.log("Server is running on port 3000")
    })