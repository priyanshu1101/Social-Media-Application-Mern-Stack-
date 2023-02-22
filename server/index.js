import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import postRoutes from "./routes/posts.js";
// import userRoutes from "./routes/users.js";

const app=express();
dotenv.config();

app.use(bodyParser.json({limit: "30mb" , extended : true}));
app.use(bodyParser.urlencoded({limit: "30mb" , extended : true}));
app.use(cors());

app.use("/posts",postRoutes); 
// app.use("/users",userRoutes); 

const PORT = process.env.PORT || 8080;
const CONNECTION_URL = process.env.CONNECTION_URL;

mongoose.connect(CONNECTION_URL)
    .then(()=> app.listen(PORT,() => {console.log(`Server running at port : ${PORT}`);}))
    .catch((error)=> {console.log(error);})