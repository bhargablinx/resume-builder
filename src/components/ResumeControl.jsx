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
            <SkillSection />
            <ProjectSection />
            <ExperienceSection />
            <EducationSection />
        </div>
    );
};

function SkillSection() {
    return (
        <div className="bg-white w-full max-w-[500px] p-6 rounded-xl border border-gray-300 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-dark-red">
                <i className="fa-solid fa-tools mr-2 text-lg" />
                Skills
            </h2>

            {/* Skill Category 1 */}
            <div className="flex flex-col space-y-1">
                <label
                    htmlFor="skill-category-1"
                    className="text-sm font-medium text-gray-700"
                >
                    Category 1 (e.g. Web Technologies)
                </label>
                <input
                    id="skill-category-1"
                    type="text"
                    placeholder="Enter category name..."
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-dark-red focus:border-transparent"
                />
                <label
                    htmlFor="skill-values-1"
                    className="text-sm font-medium text-gray-700 mt-2"
                >
                    Skills (comma separated)
                </label>
                <input
                    id="skill-values-1"
                    type="text"
                    placeholder="e.g. HTML, CSS, JavaScript"
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-dark-red focus:border-transparent"
                />
            </div>

            {/* Skill Category 2 */}
            <div className="flex flex-col space-y-1">
                <label
                    htmlFor="skill-category-2"
                    className="text-sm font-medium text-gray-700"
                >
                    Category 2 (e.g. Tools & Platforms)
                </label>
                <input
                    id="skill-category-2"
                    type="text"
                    placeholder="Enter category name..."
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-dark-red focus:border-transparent"
                />
                <label
                    htmlFor="skill-values-2"
                    className="text-sm font-medium text-gray-700 mt-2"
                >
                    Skills (comma separated)
                </label>
                <input
                    id="skill-values-2"
                    type="text"
                    placeholder="e.g. Git, GitHub, Linux"
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-dark-red focus:border-transparent"
                />
            </div>
        </div>
    );
}

const EducationSection = () => {
    const [educationList, setEducationList] = useState([1]);

    const addEducation = () => {
        if (educationList.length < 2) {
            setEducationList((prev) => [...prev, prev.length + 1]);
        }
    };

    return (
        <div className="bg-white w-full max-w-[500px] p-6 rounded-xl border border-gray-300 shadow-sm space-y-6 transition hover:shadow-lg">
            {/* Header */}
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-dark-red flex items-center">
                    <i className="fa-solid fa-graduation-cap mr-3 text-lg"></i>
                    EDUCATION
                </h2>
                {educationList.length < 2 && (
                    <button
                        onClick={addEducation}
                        className="text-dark-red hover:text-red-700 text-xl transition-all"
                        title="Add Education"
                    >
                        <i className="fa-solid fa-plus"></i>
                    </button>
                )}
            </div>

            {/* Education Input Blocks */}
            {educationList.map((num) => (
                <div key={num} className="space-y-4 border-t pt-6">
                    <div className="text-lg font-semibold text-gray-700">
                        Education {num}
                    </div>

                    {/* Institute */}
                    <div className="flex flex-col space-y-1">
                        <label
                            htmlFor={`edu-${num}-institute`}
                            className="text-sm font-medium text-gray-700"
                        >
                            Institute Name
                        </label>
                        <input
                            id={`edu-${num}-institute`}
                            type="text"
                            placeholder="Enter institute name..."
                            className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-dark-red focus:border-transparent"
                        />
                    </div>

                    {/* Degree */}
                    <div className="flex flex-col space-y-1">
                        <label
                            htmlFor={`edu-${num}-degree`}
                            className="text-sm font-medium text-gray-700"
                        >
                            Degree
                        </label>
                        <input
                            id={`edu-${num}-degree`}
                            type="text"
                            placeholder="e.g. B.Tech - Computer Science"
                            className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-dark-red focus:border-transparent"
                        />
                    </div>

                    {/* Start Date and End Date */}
                    <div className="flex gap-4">
                        <div className="flex flex-col space-y-1 w-1/2">
                            <label className="text-sm font-medium text-gray-700">
                                Start Date (Month, Year)
                            </label>
                            <input
                                type="text"
                                placeholder="e.g. Aug, 2021"
                                className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-dark-red"
                            />
                        </div>
                        <div className="flex flex-col space-y-1 w-1/2">
                            <label className="text-sm font-medium text-gray-700">
                                End Date (Month, Year)
                            </label>
                            <input
                                type="text"
                                placeholder="e.g. May, 2025"
                                className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-dark-red"
                            />
                        </div>
                    </div>

                    {/* CGPA */}
                    <div className="flex flex-col space-y-1">
                        <label
                            htmlFor={`edu-${num}-cgpa`}
                            className="text-sm font-medium text-gray-700"
                        >
                            CGPA
                        </label>
                        <input
                            id={`edu-${num}-cgpa`}
                            type="text"
                            placeholder="e.g. 8.5"
                            className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-dark-red focus:border-transparent"
                        />
                    </div>

                    {/* Additional Point */}
                    <div className="flex flex-col space-y-1">
                        <label
                            htmlFor={`edu-${num}-point`}
                            className="text-sm font-medium text-gray-700"
                        >
                            Highlight
                        </label>
                        <input
                            id={`edu-${num}-point`}
                            type="text"
                            placeholder="e.g. Member of coding club, etc."
                            className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-dark-red focus:border-transparent"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

function ExperienceSection() {
    const [experienceList, setExperienceList] = useState([1]);

    const addExperience = () => {
        if (experienceList.length < 2) {
            setExperienceList((prev) => [...prev, prev.length + 1]);
        }
    };

    return (
        <div className="bg-white w-full max-w-[500px] p-6 rounded-xl border border-gray-300 shadow-sm space-y-6 transition hover:shadow-lg">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-dark-red flex items-center">
                    <i className="fa-solid fa-briefcase mr-3 text-lg"></i>
                    EXPERIENCE
                </h2>
                {experienceList.length < 2 && (
                    <button
                        onClick={addExperience}
                        className="text-dark-red hover:text-red-700 text-xl transition-all"
                        title="Add Experience"
                    >
                        <i className="fa-solid fa-plus"></i>
                    </button>
                )}
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

const ProjectSection = () => {
    const [projectList, setProjectList] = useState([1]);

    const addProject = () => {
        if (projectList.length < 3) {
            setProjectList((prev) => [...prev, prev.length + 1]);
        }
    };

    return (
        <div className="bg-white w-full max-w-[500px] p-6 rounded-xl border border-gray-300 shadow-sm space-y-6 transition hover:shadow-lg">
            {/* Header with + icon */}
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-dark-red flex items-center">
                    <i className="fa-solid fa-folder-tree mr-3 text-lg"></i>
                    PROJECTS
                </h2>
                {projectList.length < 3 && (
                    <button
                        onClick={addProject}
                        className="text-dark-red hover:text-red-700 text-xl transition-all"
                        title="Add Project"
                    >
                        <i className="fa-solid fa-plus"></i>
                    </button>
                )}
            </div>

            {/* Projects Form */}
            {projectList.map((num) => (
                <div key={num} className="space-y-4 border-t pt-6">
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
                        {[1, 2, 3].map((point) => (
                            <div
                                key={point}
                                className="flex flex-col space-y-1"
                            >
                                <label
                                    htmlFor={`project-${num}-point-${point}`}
                                    className="text-sm font-medium text-gray-700"
                                >
                                    Point {point}
                                </label>
                                <input
                                    id={`project-${num}-point-${point}`}
                                    type="text"
                                    placeholder="Enter key achievement or feature..."
                                    className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-dark-red focus:border-transparent transition-all"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

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

            {/* GitHub link */}
            <div className="flex flex-col space-y-1">
                <label
                    htmlFor="github"
                    className="text-sm font-medium text-gray-700"
                >
                    GitHub Link
                </label>
                <input
                    id="github"
                    type="url"
                    placeholder="https://github.com/username"
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-dark-red focus:border-transparent transition-all"
                />
            </div>

            {/* LinkedIn link */}
            <div className="flex flex-col space-y-1">
                <label
                    htmlFor="linkedin"
                    className="text-sm font-medium text-gray-700"
                >
                    LinkedIn Link
                </label>
                <input
                    id="linkedin"
                    type="url"
                    placeholder="https://www.linkedin.com/in/username"
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-dark-red focus:border-transparent transition-all"
                />
            </div>
        </div>
    );
}
