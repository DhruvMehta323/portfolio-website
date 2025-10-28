import express from "express";
import Experience from "../models/Experience.js";
const router = express.Router();

router.get("/",async(req, res)=>{
    const experience = await Experience.find();
    res.json(experience);
});

router.post("/",async(req, res)=>{
    const experience = new Experience(req.body);
    await experience.save();
    res.json({message: "Experience Added"});
    
});

export default router;