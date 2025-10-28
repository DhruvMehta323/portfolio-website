import express from "express";
import Project from "../models/Project.js";
const router = express.Router();

router.get("/",async(req, res)=>{
    const projects = await Project.find();
    res.json(projects);
});

router.get("/:category",async(req, res)=>{
    try{
    const {category} = req.params; 
    const projects = await Project.find({category});
    res.json(projects);
    } catch (error){
        console.error("Error finding the project:", error);
        res.status(500).json({message:"Internal Server Error"})
    }
});

router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
  } catch (error) {
    console.error('Error fetching project:', error);
    res.status(500).json({ message: 'Error fetching project', error: error.message });
  }
});

router.post("/",async(req, res)=>{
    const project = new Project(req.body);
    await project.save();
    res.json({message: "Project Added"});
    
});

router.put('/:id', async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(updatedProject);
  } catch (error) {
    console.error('Error updating project:', error);
    res.status(400).json({ message: 'Error updating project', error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const project = await Project.findByIdAndDelete(id);

        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }

        res.json({ message: "Project deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});


export default router;