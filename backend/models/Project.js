import mongoose from "mongoose";
const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    desc: {
        type: String,
        required: true,
        trim: true,
    },
    techStack: {
        type: [String],
        required: true,
        validate: v => Array.isArray(v) && v.length > 0,
    },
    image: {
        type: String,
        required: true,
    },
    githubLink: {
        type: String,
        required: true,
    },
    liveDemoLink: {
        type: String,
        required: false, // Only for some projects
    },
    category: {
        type: [String],
        required: true, // Used for filtering projects (e.g., "frontend", "backend", "fullstack")
        validate: v => Array.isArray(v) && v.length > 0,
    },

});

const Project = mongoose.model("Project", projectSchema);
export default Project;
