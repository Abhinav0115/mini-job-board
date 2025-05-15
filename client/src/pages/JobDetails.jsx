import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getJobById } from "../api/jobs";
import {
    Briefcase,
    MapPin,
    Building,
    Mail,
    Home,
    ArrowLeft,
} from "lucide-react";

export default function JobDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getJobById(id)
            .then((res) => setJob(res.data))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-60">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-emerald-600 border-opacity-50"></div>
            </div>
        );
    }

    if (!job) return <p className="text-center p-4">Job not found.</p>;

    return (
        <div className="bg-gray-100 h-full w-full mx-auto p-4">
            <button
                onClick={() => navigate(-1)}
                className="flex items-center ml-10 mb-4 text-emerald-600 hover:underline"
            >
                <ArrowLeft className="mr-1" size={18} />
                Back
            </button>

            <div className="bg-white mx-20 capitalize shadow-md p-6 rounded-lg">
                <h1 className="text-4xl font-bold capitalize flex items-center mb-2">
                    <Briefcase className="mr-2 mt-1 text-emerald-600" />
                    {job.title}
                </h1>

                <p className="text-lg flex items-center mb-1 text-gray-700">
                    <Building className="mr-2" size={18} />
                    {job.company}
                </p>

                <p className="text-gray-600 flex items-center mb-1">
                    <MapPin className="mr-2" size={18} />
                    {job.location}
                </p>

                <span className="inline-block mt-2 px-2 py-1 bg-blue-100 text-blue-600 rounded text-sm">
                    {job.type}
                </span>

                <h2 className="mt-6 text-lg font-bold">Job Description</h2>
                <p className="text-gray-700 mt-1">{job.description}</p>

                {(job.companyDescription ||
                    job.companyEmail ||
                    job.companyAddress) && (
                    <>
                        <h2 className="mt-6 text-lg font-bold">
                            Company Details
                        </h2>
                        <div className="text-gray-700 space-y-1 mt-1">
                            {job.companyDescription && (
                                <p className="">{job.companyDescription}</p>
                            )}
                            {job.companyEmail && (
                                <p className="flex items-center">
                                    <Mail className="mr-2" size={16} />
                                    {job.companyEmail}
                                </p>
                            )}
                            {job.companyAddress && (
                                <p className="flex items-center">
                                    <Home className="mr-2" size={16} />
                                    {job.companyAddress}
                                </p>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
