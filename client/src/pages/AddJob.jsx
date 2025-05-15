import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createJob } from "../api/jobs";

export default function AddJob() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            await createJob(data);
            navigate("/");
        } catch (err) {
            alert("Failed to create job");
        }
    };

    return (
        <div className="max-w-xl mx-auto p-4">
            <h2 className="text-xl font-bold mb-4">Add New Job</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <input
                    type="text"
                    placeholder="Job Title"
                    {...register("title", { required: true })}
                    className="input input-bordered w-full "
                />
                {errors.title && (
                    <p className="text-red-500">Title is required</p>
                )}

                <input
                    type="text"
                    placeholder="Company Name"
                    {...register("company", { required: true })}
                    className="input input-bordered w-full"
                />
                {errors.company && (
                    <p className="text-red-500">Company is required</p>
                )}

                <select
                    {...register("type", { required: true })}
                    className="select select-bordered w-full"
                >
                    <option value="">Select Job Type</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Internship">Internship</option>
                </select>
                {errors.type && (
                    <p className="text-red-500">Type is required</p>
                )}

                <input
                    type="text"
                    placeholder="Location"
                    {...register("location", { required: true })}
                    className="input input-bordered w-full"
                />
                {errors.location && (
                    <p className="text-red-500">Location is required</p>
                )}

                <textarea
                    placeholder="Description"
                    {...register("description", { required: true })}
                    className="textarea textarea-bordered w-full"
                ></textarea>
                {errors.description && (
                    <p className="text-red-500">Description is required</p>
                )}

                <button type="submit" className="btn btn-primary w-full">
                    Submit
                </button>
            </form>
        </div>
    );
}
