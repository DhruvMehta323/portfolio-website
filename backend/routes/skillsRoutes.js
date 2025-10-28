import express from "express";
import Skill from "../models/Skill.js";
const router = express.Router();

router.get('/',async(req, res)=>{
    const skills = await Skill.find();
    res.json(skills);
});

router.get('/type',async(req, res)=>{
    try{
        const {type} = req.params();
        const skills = await Skill.find({type});
    }catch(error){
        console.error("Error finding the Skill", error);
        res.status(500).json({message:"Internal Server Error"});
    }
});

// router.post('/',async(req, res)=>{
//     const skill = new Skill(req.body);
//     await skill.save();
//     res.json({message:"Skill Added"});
// });

router.post('/', async (req, res) => {
  try {
    const skillsArray = req.body; // expecting an array of skill objects
    if (!Array.isArray(skillsArray)) {
      return res.status(400).json({ message: "Request body must be an array of skills" });
    }

    await Skill.insertMany(skillsArray); // bulk insert
    res.status(201).json({ message: "All skills added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
});

export default router;
