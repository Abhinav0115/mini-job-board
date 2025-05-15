import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        company: {
            type: String,
            required: true,
        },
        companyLogo: {
            type: String,
        },
        companyDescription: {
            type: String,
        },
        companyEmail: {
            type: String,
        },
        companyAddress: {
            type: String,
        },
        type: {
            type: String,
            required: true,
            enum: ["Full-time", "Part-time", "Internship"],
        },
        location: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        isEdited: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

const job = mongoose.model.Job || mongoose.model("Job", jobSchema);

export default job;
