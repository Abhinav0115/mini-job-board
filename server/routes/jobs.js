import express from "express";
import {
    getAllJobs,
    getJobById,
    getJobsByQuery,
    createJob,
} from "../controllers/controller.js";

const router = express.Router();

router.get("/", getAllJobs); 
router.get("/search", getJobsByQuery);
router.get("/:id", getJobById);
router.post("/", createJob);

export default router;
