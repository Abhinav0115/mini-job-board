import React, { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "../components/JobCard";
import SearchBar from "../components/SearchBar";
import AddJobModal from "../components/AddJobModal";

const HomePage = ({ showModal, setShowModal }) => {
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);

    const fetchJobs = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/jobs");
            setJobs(response.data);
            setFilteredJobs(response.data);
        } catch (error) {
            console.error("Failed to fetch jobs", error);
        }
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    const handleSearch = async (query) => {
        try {
            const response = await axios.get(
                "http://localhost:5000/api/jobs/search",
                {
                    params: query,
                }
            );
            setFilteredJobs(response.data);
        } catch (error) {
            console.error("Search failed", error);
        }
    };

    const handleJobAdded = (newJob) => {
        setJobs((prev) => [newJob, ...prev]);
        setFilteredJobs((prev) => [newJob, ...prev]);
    };

    return (
        <div className="container mx-auto p-4 pt-1 min-h-screen">
            <div className="flex justify-center items-center mb-4">
                <h1 className="text-4xl font-bold">Job Listings</h1>
                {/* <button
                    onClick={() => setShowModal(true)}
                    className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700"
                >
                    + Add New Job
                </button> */}
            </div>

            <SearchBar onSearch={handleSearch} />

            <div className="mx-1 md:mx-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                {filteredJobs.length > 0 ? (
                    filteredJobs.map((job) => (
                        <JobCard key={job._id} job={job} />
                    ))
                ) : (
                    <p>No jobs found</p>
                )}
            </div>

            {/* Modal */}
            {showModal && (
                <AddJobModal
                    onClose={() => setShowModal(false)}
                    onJobAdded={handleJobAdded}
                />
            )}
        </div>
    );
};

export default HomePage;
