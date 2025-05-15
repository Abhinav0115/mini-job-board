import React, { useState, useEffect } from "react";

const SearchBar = ({ onSearch }) => {
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");

    useEffect(() => {
        if (!title.trim() && !location.trim()) {
            onSearch({});
        }
    }, [title, location, onSearch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch({ title, location });
    };

    const handleClear = () => {
        setTitle("");
        setLocation("");
        onSearch({});
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex justify-center flex-col md:flex-row gap-4 mt-8"
        >
            <div className="flex gap-4">
                <input
                    type="text"
                    placeholder="Search by job title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md w-full outline-emerald-600"
                />
                <input
                    type="text"
                    placeholder="Search by location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md w-full outline-emerald-600"
                />
                <button
                    type="submit"
                    className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700"
                >
                    Search
                </button>
                {(title || location) && (
                    <button
                        type="button"
                        onClick={handleClear}
                        className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400"
                    >
                        Clear
                    </button>
                )}
            </div>
        </form>
    );
};

export default SearchBar;
