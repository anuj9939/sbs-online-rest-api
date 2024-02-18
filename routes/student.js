const express = require('express')
const router = express.Router()
const Student = require('../models/student.model');
const mongoose  = require('mongoose');


// router.get('/',(req,res,next)=>{
//     res.status(200).json({message:'this is student get request'});
// })
router.get("/", (req,res,next)=>{
    Student.find().then((result)=>{
        res.status(200).json({
            studentData:result
        })
    }).catch((err)=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
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

router.get("/:id", (req,res,next)=>{
    Student.findById(req.params.id).then((result)=>{
        res.status(200).json({
            student:result
        })
    }).catch((err)=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})

//delete request
router.delete("/:id",(req,res,next)=>{
    Student.deleteOne({_id:req.params.id}).then((result)=>{
        res.status(200).json({
            message:'Record is deleted',
            result:result
        })
    }).catch((err)=>{
        res.status(500).json({
            error:err
        })
    })
})

//put request 
router.put("/:id",(req,res,next)=>{
    console.log(req.params.id);
    Student.findOneAndUpdate({_id:req.params.id},{
        $set:{
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            gender:req.body.gender
        }}).then((result)=>{
            res.status(200).json({
                update_student:result
            })
        }).catch((err)=>{
            console.log(err);
            res.status(500).json({
                error:err
            })
        })
})


module.exports=router