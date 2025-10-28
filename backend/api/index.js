import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import projectRoutes from "../routes/projectRoutes.js";
import skillsRoutes from "../routes/skillsRoutes.js";
import expRoutes from "../routes/expRoutes.js";
import educationRoutes from "../routes/educationRoutes.js";
import certificateRoutes from "../routes/certificateRoutes.js"
dotenv.config();

// App part
const app = express();
app.use(express.json());
const PORT = process.env.PORT;


// Cors settings
const allowedOrigins = [process.env.FRONTEND_URL, process.env.PRODUCTION_URL];

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// DB part
// DB connection setup
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000, // Optional: increase timeout
    });

    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1); // Exit process if connection fails
  }
};

// Call the connection function
connectDB();

app.listen(PORT, () =>{
    console.log("Server running on port:" + 5000);
});

app.get("/", (req, res) => {
  res.send("🌐 Portfolio API is running...");
});
app.use('/projects', projectRoutes);
app.use('/skills', skillsRoutes);
app.use('/certifications', certificateRoutes);
app.use('/education', educationRoutes); 
app.use('/experience', expRoutes);


