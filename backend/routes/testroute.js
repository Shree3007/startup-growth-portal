const express= require("express");
const user=require("../models/user")
const router= express.Router();

router.get("/test",async(req,res)=>{
    try{
        const result= await user.find();
        res.status(200).json(result);
    }
    catch(error){
        res.status(500).json({message:"Error fetching categories",error});
    }
    
});

module.exports=router;