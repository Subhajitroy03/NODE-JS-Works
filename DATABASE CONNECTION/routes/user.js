const express=require("express")
const router=express.Router();
const User = require("../models/user");
router.get("/",async(req,res)=>{
    const allstudents=await User.find({})
    return res.json(allstudents)
})
router.get("/:roll",async(req,res)=>{
    const userbyid=await User.findOne({Roll:req.params.roll});
    if(!userbyid){
        return res.status(404).json({msg:"No such data found"})
    }
    return res.json(userbyid)
})
router.post("/",async(req,res)=>{
    body=req.body;
    if(!body.Roll || !body.Name || !body.Department || !body.Gender || !body.Mail || !body.Semester){
        return res.status(400).json({msg:"All fields are necessary..."})
    }
    const result=await User.create({
        Roll:body.Roll,
        Name:body.Name,
        Department:body.Department,
        Semester:body.Semester,
        Gender:body.Gender,
        Mail:body.Mail,
    })
    return res.status(201).json({msg:"Data inserted in database.."})
})
router.patch("/:roll",async(req,res)=>{
    await User.findOneAndUpdate({Roll:req.params.roll},{Gender:"Prefer not to say"});
    return res.json({status:"Success"})
})
router.delete("/:roll",async(req,res)=>{
    await User.findOneAndDelete({Roll:req.params.roll});
    return res.json({status:"Success"})
})
module.exports=router;

