import Job from "../models/job.js";

export const getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find().sort({ createdAt: -1 });
        if (!jobs || jobs.length === 0) {
            return res.status(404).json({ error: "No jobs found" });
        }
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch jobs" });
    }
};

export const getJobsByQuery = async (req, res) => {
    try {
        const { title, location } = req.query;
        const filter = {};
        if (title) filter.title = new RegExp(title, "i");
        if (location) filter.location = new RegExp(location, "i");

        const jobs = await Job.find(filter).sort({ createdAt: -1 });
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ error: "Failed to search jobs" });
    }
};

export const getJobById = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        if (!job) return res.status(404).json({ error: "Job not found" });
        res.status(200).json(job);
    } catch (error) {
        res.status(400).json({ error: "Invalid job ID" });
    }
};

export const createJob = async (req, res) => {
    try {
        const { title, company, type, location, description, ...otherField } =
            req.body;

        const existingJob = await Job.findOne({
            title: title.trim(),
            company: company.trim(),
            location: location.trim(),
        });
        if (existingJob) {
            return res.status(409).json({ error: "Job already exists" });
        }

        if (!title || !company || !type || !location || !description) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newJob = new Job({
            title,
            company,
            type,
            location,
            description,
            ...otherField,
        });
        await newJob.save();
        res.status(201).json(newJob);
    } catch (error) {
        res.status(500).json({ error: "Failed to create job" });
    }
};

