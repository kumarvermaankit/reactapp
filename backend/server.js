
const express=require("express");
const cors= require("cors");
const mongoose=require("mongoose");

require('dotenv').config();

const app= express();
const port= process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri= process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser:true, useCreateIndex:true,useUnifiedTopology:true });
const connection=mongoose.connection;
try
{
    connection.once('open',()=>{
    console.log("MongoDB database connection established successfully");
})
}
catch(err){
    console.log(err);
}


const SignUp=require("./SignUp");
app.use("/signup",SignUp);

const SignIn=require("./SignIn");
app.use("/signin",SignIn);











app.listen(port,()=>{
console.log("Server is running on Port 5000");

})