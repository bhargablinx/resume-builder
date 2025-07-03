import { useState } from "react";

export const ResumeControl = () => {
    return (
        <div className="flex-1 flex flex-col items-center gap-[30px]">
            <div className="flex justify-between w-[300px]">
                <button className="bg-light-red hover:bg-light-red-hover text-light px-3 p-1 rounded-lg text-[14px] cursor-pointer">
                    Clear Field
                </button>
                <button className="bg-green-500 hover:bg-green-600 px-3 p-1 rounded-lg text-[14px] cursor-pointer">
                    Save
                </button>
                <button className="bg-blue-500 hover:bg-blue-600 text-light px-3 p-1 rounded-lg text-[14px] cursor-pointer">
                    Load Sample
                </button>
            </div>
            <PersonalSection />
            <ProjectSection />
            <ExperienceSection />
        </div>
    );
};

function ExperienceSection() {
    const [experienceList, setExperienceList] = useState([1]);

    const addExperience = () => {
        setExperienceList((prev) => [...prev, prev.length + 1]);
    };

    return (
        <div className="bg-white w-full max-w-[500px] p-6 rounded-xl border border-gray-300 shadow-sm space-y-6 transition hover:shadow-lg">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-dark-red flex items-center">
                    <i className="fa-solid fa-briefcase mr-3 text-lg"></i>
                    EXPERIENCE
                </h2>
                <button
                    onClick={addExperience}
                    className="text-dark-red hover:text-red-700 text-xl transition-all"
                    title="Add Experience"
                >
                    <i className="fa-solid fa-plus"></i>
                </button>
            </div>

            {experienceList.map((expIndex) => (
                <div key={expIndex} className="space-y-4 border-t pt-6">
                    {/* Company Name */}
                    <div className="flex flex-col space-y-1">
                        <label className="text-sm font-medium text-gray-700">
                            Company Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter company name..."
                            className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-dark-red focus:border-transparent transition-all"
                        />
                    </div>

                    {/* Start and End Dates */}
                    <div className="flex gap-4">
                        <div className="flex flex-col space-y-1 w-1/2">
                            <label className="text-sm font-medium text-gray-700">
                                Start Date (Month, Year)
                            </label>
                            <input
                                type="text"
                                placeholder="e.g. Jan, 2021"
                                className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-dark-red focus:border-transparent transition-all"
                            />
                        </div>
                        <div className="flex flex-col space-y-1 w-1/2">
                            <label className="text-sm font-medium text-gray-700">
                                End Date (Month, Year)
                            </label>
                            <input
                                type="text"
                                placeholder="e.g. Jun, 2023"
                                className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-dark-red focus:border-transparent transition-all"
                            />
                        </div>
                    </div>

                    {/* Job Role */}
                    <div className="flex flex-col space-y-1">
                        <label className="text-sm font-medium text-gray-700">
                            Job Role
                        </label>
                        <input
                            type="text"
                            placeholder="Enter job role..."
                            className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-dark-red focus:border-transparent transition-all"
                        />
                    </div>

                    {/* Bullet Points */}
                    <div className="flex flex-col space-y-3">
                        {[1, 2, 3].map((point) => (
                            <div
                                key={point}
                                className="flex flex-col space-y-1"
                            >
                                <label className="text-sm font-medium text-gray-700">
                                    Point {point}
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter key responsibility or achievement..."
                                    className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-dark-red focus:border-transparent transition-all"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

function ProjectSection() {
    const [isHidden, setIsHidden] = useState(true);

    const toggleAccordion = () => {
        setIsHidden((prev) => !prev);
    };
    return (
        <div className="bg-white w-full max-w-[500px] p-6 rounded-xl border border-gray-300 shadow-sm space-y-4 transition hover:shadow-lg">
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={toggleAccordion}
            >
                <h2 className="text-2xl font-bold text-dark-red flex items-center">
                    <i className="fa-solid fa-folder-tree mr-3 text-lg"></i>
                    PROJECTS
                </h2>
                <span
                    className={`text-gray-400 transform transition-transform duration-300 ${
                        isHidden ? "" : "rotate-180"
                    }`}
                >
                    &#9660;
                </span>
            </div>

            <div
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                    isHidden ? "max-h-0" : "max-h-[5000px]"
                }`}
            >
                {[1, 2, 3].map((num) => (
                    <div key={num} className="space-y-4 mt-6">
                        <div className="text-lg font-semibold text-gray-700">
                            Project {num}
                        </div>

                        {/* Project Name */}
                        <div className="flex flex-col space-y-1">
                            <label
                                htmlFor={`project-${num}-name`}
                                className="text-sm font-medium text-gray-700"
                            >
                                Project Name
                            </label>
                            <input
                                id={`project-${num}-name`}
                                type="text"
                                placeholder="Enter project name..."
                                className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-dark-red focus:border-transparent transition-all"
                            />
                        </div>

                        {/* Short Description */}
                        <div className="flex flex-col space-y-1">
                            <label
                                htmlFor={`project-${num}-desc`}
                                className="text-sm font-medium text-gray-700"
                            >
                                Short Description
                            </label>
                            <textarea
                                id={`project-${num}-desc`}
                                rows={2}
                                placeholder="Enter short description..."
                                className="px-4 py-2 border border-gray-300 rounded-md text-sm resize-none focus:outline-none focus:ring-2 focus:ring-dark-red focus:border-transparent transition-all"
                            />
                        </div>

                        {/* Bullet Points */}
                        <div className="flex flex-col space-y-3">
                            {[1, 2, 3].map((bullet) => (
                                <div
                                    key={bullet}
                                    className="flex flex-col space-y-1"
                                >
                                    <label
                                        htmlFor={`project-${num}-bullet-${bullet}`}
                                        className="text-sm font-medium text-gray-700"
                                    >
                                        Point {bullet}
                                    </label>
                                    <input
                                        id={`project-${num}-bullet-${bullet}`}
                                        type="text"
                                        placeholder={`Enter key achievement or feature...`}
                                        className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-dark-red focus:border-transparent transition-all"
                                    />
                                </div>
                            ))}
                        </div>

                        <hr className="mt-6 border-gray-200" />
                    </div>
                ))}
            </div>
        </div>
    );
}

function PersonalSection() {
    return (
        <div className="bg-white w-full max-w-[500px] p-6 pb-8 rounded-xl border border-gray-300 shadow-sm space-y-6">
            <div className="text-2xl font-bold text-dark-red">
                Personal Details
            </div>

            {/* Full Name */}
            <div className="flex flex-col space-y-1">
                <label
                    htmlFor="full-name"
                    className="text-sm font-medium text-gray-700"
                >
                    Full Name
                </label>
                <input
                    id="full-name"
                    type="text"
                    placeholder="Enter full name..."
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-dark-red focus:border-transparent transition-all"
                />
            </div>

            {/* Email */}
            <div className="flex flex-col space-y-1">
                <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                >
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    placeholder="Enter email address..."
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-dark-red focus:border-transparent transition-all"
                />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col space-y-1">
                <label
                    htmlFor="phone"
                    className="text-sm font-medium text-gray-700"
                >
                    Phone Number
                </label>
                <input
                    id="phone"
                    type="tel"
                    placeholder="Enter phone number..."
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-dark-red focus:border-transparent transition-all"
                />
            </div>

            {/* Address */}
            <div className="flex flex-col space-y-1">
                <label
                    htmlFor="address"
                    className="text-sm font-medium text-gray-700"
                >
                    Address
                </label>
                <input
                    id="address"
                    placeholder="Enter your address..."
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-dark-red focus:border-transparent transition-all resize-none"
                />
            </div>
        </div>
    );
}
