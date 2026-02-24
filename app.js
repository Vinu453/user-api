const express =require("express");//loads the express framework
const mongoose = require("mongoose"); // loads the Mongoose package.Mongoose is an ODM (Object Document Mapper).It acts as a bridge between:Node.js application,MongoDB database //Used to connect to mongodb and to create the models


require("dotenv").config();

const authRoutes=require("./routes/authRoutes");

const app =express();

app.use(express.json());//allows the express to read JSON body from the postman or from the frontend react...

mongoose.connect("mongodb://127.0.0.1:27017/authDB")
.then(()=>console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/api/auth",authRoutes);
 app.listen(5000, () => {
    console.log("server running on the port 5000");
 });