
const express = require("express");
require('dotenv').config()
const mongoose = require('mongoose');
const app = express();
const studentRoutes=require('./routes/student')
const facultyRoutes=require('./routes/faculty')
const bodyParser = require('body-parser')

main().catch(err => console.log(err));
checkDbEvent()
async function main() {
 
  await mongoose.connect(process.env.DATABASE_URL);
  
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  
}

 function checkDbEvent(){
  mongoose.connection.on('connected', () => console.log('connected'));
  mongoose.connection.on('open', () => console.log('open'));
  mongoose.connection.on('disconnected', () => console.log('disconnected'));
  mongoose.connection.on('reconnected', () => console.log('reconnected'));
  mongoose.connection.on('disconnecting', () => console.log('disconnecting'));
  mongoose.connection.on('close', () => console.log('close'));
}

app.use(bodyParser.json())
app.use('/student',studentRoutes)
app.use('/faculty',facultyRoutes)

app.use((req,res,next)=>{
    res.status(404).json({error:'Bad Request'})
    })
    
// app.use((req,res,next)=>{
// res.status(200).json({message:'app is running'})
// })

module.exports=app;