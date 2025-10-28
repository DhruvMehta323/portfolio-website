import mongoose from "mongoose";
const educationSchema = new mongoose.Schema({
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
        validate: {
    validator: function (value) {
        return value >= this.startDate;
        },
        message: "End date must be greater than or equal to start date",
    },
    },
    institute: {
        type: String,
        required: true,
    },
    location: {
        type: String,
    },
    degree: {
        type: String,
        required: true,
    },
    courses: {
        type: [String],
        required: true, 
    },
    

});

const Education = mongoose.model("Education", educationSchema);
export default Education;
