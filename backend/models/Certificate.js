import mongoose from "mongoose";
const certiSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true,
    },

});

const Certificate = mongoose.model("Certificate", certiSchema);
export default Certificate;
