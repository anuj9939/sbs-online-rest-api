const express = require("express")

const app = express();

const studentRoutes=require('./routes/student')
const facultyRoutes=require('./routes/faculty')

app.use('/student',studentRoutes)
app.use('/faculty',facultyRoutes)

app.use((req,res,next)=>{
    res.status(404).json({error:'Bad Request'})
    })
    
// app.use((req,res,next)=>{
// res.status(200).json({message:'app is running'})
// })

module.exports=app;