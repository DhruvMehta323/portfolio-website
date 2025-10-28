import express from "express";
import Education from "../models/Education.js";

const router = express.Router();

router.get('/',async(req, res)=>{
    const education = await Education.find();
    res.json(education);
})

router.post('/',async(req, res)=>{
    const education = new Education(req.body);
    await education.save();
    res.json("Education Added:"+education);
})

router.delete('/:id',async(req, res)=>{
    try{
    const {id} = req.params;
    const education = await Education.findByIdAndDelete(id);
     if (!education) {
            return res.status(404).json({ message: "Education not found" });
        }
    res.json("Education Deleted:"+education);
    } catch(error) {
        
        res.status(500).json({message:"Internal Server Error", error: error.message});
    }
})


export default router;