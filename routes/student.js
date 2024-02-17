const express = require('express')
const router = express.Router()
const Student = require('../models/student.model');
const mongoose  = require('mongoose');


router.get('/',(req,res,next)=>{
    res.status(200).json({message:'this is student get request'});
})

router.post('/',(req,res,next)=>{
    const student = new Student({
        _id: new mongoose.Types.ObjectId,
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        gender:req.body.gender,

    });
    student.save().then((resuslt)=>{
        console.log(resuslt)
        res.status(200).json({newStudent:resuslt})
    }).catch((err)=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
    // res.status(200).json({message:'this is student post request'});
})

module.exports=router