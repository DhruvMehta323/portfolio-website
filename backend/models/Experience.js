import mongoose from "mongoose";
const expSchema = new mongoose.Schema({
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
    jobrole: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    techStack: {
        type: [String],
        required: true, 
    },
    workDone: {
        type: [String],
        required: true,
    },
    location: {
        type: String,
    },

});

const Experience = mongoose.model("Experience", expSchema);
export default Experience;
