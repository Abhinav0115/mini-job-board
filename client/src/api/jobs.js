import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE;

// const API_BASE = "http://localhost:5000/api/jobs";

export const fetchJobs = () => axios.get(API_BASE);

export const searchJobs = (params) =>
    axios.get(`${API_BASE}/search`, { params });

export const getJobById = (id) => axios.get(`${API_BASE}/${id}`);

export const createJob = (jobData) => axios.post(API_BASE, jobData);
