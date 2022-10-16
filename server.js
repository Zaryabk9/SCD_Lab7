import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import path from 'path';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
import userModel from './model/users.js';
var router = express.Router();
var user = userModel.find({});

const _dirname = path.dirname(_filename);
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
  
 
    
    app.listen(3000, () => {
      connect();
      console.log("Server is running on port 3000")
    })