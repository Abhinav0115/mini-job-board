import { Link } from "react-router-dom";
import { Briefcase, MapPin, Building2 } from "lucide-react";

export default function JobCard({ job }) {
    const typeColors = {
        "Full-time": "bg-emerald-100 text-emerald-600",
        "Part-time": "bg-yellow-100 text-yellow-600",
        Internship: "bg-blue-100 text-blue-600",
    };

    return (
        <Link
            to={`/job/${job._id}`}
            className="group border rounded-xl max-w-72 bg-white hover:shadow-xl transition-shadow duration-300"
        >
            <img
                src="/dhoni.png"
                alt="job"
                className="w-full h-40 object-cover rounded-t-xl"
            />

            <div className="p-4 space-y-1">
                <h3 className="text-xl capitalize font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors">
                    {job.title}
                </h3>

                <div className="space-y-1">
                    <div className="flex items-center text-gray-600 text-sm gap-1">
                        <Building2 className="w-4 h-4" />
                        <span>{job.company}</span>
                    </div>

                    <div className="flex items-center text-gray-600 text-sm gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                    </div>
                    {/* 
                <div className="flex items-center text-gray-600 text-sm gap-1">
                    <Briefcase className="w-4 h-4" />
                    <span>{job.type}</span>
                </div> */}

                    <span
                        className={`inline-block flex w-fit gap-1 mt-2 px-2 py-1 rounded-full text-xs font-medium ${
                            typeColors[job.type] || "bg-gray-100 text-gray-600"
                        }`}
                    >
                        <Briefcase className="w-4 h-4" />
                        {job.type}
                    </span>
                </div>
            </div>
        </Link>
    );
}
