import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    changePersonalInfo,
    changeSkills,
    changeProjects,
    changeExperience,
} from "../slices/resumeSlice";

export const ResumeControl = () => {
    const { personalInfo, skill, projects, experience, education } =
        useSelector((state) => state.resume);

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
            <PersonalSection personalInfo={personalInfo} />
            <SkillSection skill={skill} />
            <ProjectSection projects={projects} />
            <ExperienceSection experience={experience} />
            <EducationSection />
        </div>
    );
};

function SkillSection({ skill }) {
    const [skills, setSkills] = useState(skill);
    const dispatch = useDispatch();

    const handleChange = (index, field, value) => {
        const updated = skills.map((s, i) =>
            i === index ? { ...s, [field]: value } : s
        );
        setSkills(updated);
    };

    const addSkillCategory = () => {
        if (skills.length < 3) {
            setSkills([...skills, { categoryName: "", skills: "" }]);
        }
    };

    useEffect(() => {
        dispatch(changeSkills(skills));
    }, [skills]);

    return (
        <div className="bg-white w-full max-w-[500px] p-6 rounded-xl border border-gray-300 shadow-sm space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-dark-red flex items-center gap-2">
                    <i className="fa-solid fa-screwdriver-wrench text-lg" />
                    Skills
                </h2>
                {skills.length < 3 && (
                    <button
                        onClick={addSkillCategory}
                        className="text-dark-red hover:text-light-red transition"
                        title="Add skill category"
                    >
                        <i className="fa-solid fa-plus text-lg" />
                    </button>
                )}
            </div>

            {/* Skill Fields */}
            {skills.map((skill, index) => (
                <div key={index} className="space-y-2 border-t pt-4">
                    {/* Category */}
                    <div className="flex flex-col">
                        <label
                            htmlFor={`category-${index}`}
                            className="text-sm font-medium text-gray-700"
                        >
                            Category {index + 1}
                        </label>
                        <input
                            id={`category-${index}`}
                            type="text"
                            placeholder="e.g. Web Technologies"
                            value={skill.categoryName}
                            onChange={(e) =>
                                handleChange(
                                    index,
                                    "categoryName",
                                    e.target.value
                                )
                            }
                            className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-dark-red"
                        />
                    </div>

                    {/* Skills */}
                    <div className="flex flex-col">
                        <label
                            htmlFor={`skills-${index}`}
                            className="text-sm font-medium text-gray-700"
                        >
                            Skills (comma separated)
                        </label>
                        <input
                            id={`skills-${index}`}
                            type="text"
                            placeholder="e.g. HTML, CSS, JavaScript"
                            value={skill.skills}
                            onChange={(e) =>
                                handleChange(index, "skills", e.target.value)
                            }
                            className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-dark-red"
                        />
                    </div>
                </div>
            ))}
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

function ExperienceSection({ experience }) {
    const [experienceList, setExperienceList] = useState(experience);
    const dispatch = useDispatch();

    const handleChange = (index, field, value) => {
        const updated = experienceList.map((e, i) =>
            i === index ? { ...e, [field]: value } : e
        );
        setExperienceList(updated);
    };

    const handleBulletPointChange = (value, expIndex, bulletIndex) => {
        const updated = experienceList.map((experience, i) => {
            if (i === expIndex) {
                const updatedBulletPoints = [...experience.bulletPoints];
                updatedBulletPoints[bulletIndex] = value;

                return {
                    ...experience,
                    bulletPoints: updatedBulletPoints,
                };
            }
            return experience;
        });

        setExperienceList(updated);
    };

    const addExperience = () => {
        if (experienceList.length < 2) {
            setExperienceList((prev) => [...prev, prev.length + 1]);
        }
    };

    useEffect(() => {
        dispatch(changeExperience(experienceList));
    }, [experienceList]);

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

            {experienceList.map((item, expIndex) => (
                <div key={expIndex} className="space-y-4 border-t pt-6">
                    {/* Company Name */}
                    <div className="flex flex-col space-y-1">
                        <label className="text-sm font-medium text-gray-700">
                            Company Name
                        </label>
                        <input
                            value={item.companyName}
                            onChange={(e) =>
                                handleChange(
                                    expIndex,
                                    "companyName",
                                    e.target.value
                                )
                            }
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
                                value={item.startDate}
                                onChange={(e) =>
                                    handleChange(
                                        expIndex,
                                        "startDate",
                                        e.target.value
                                    )
                                }
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
                                value={item.endDate}
                                onChange={(e) =>
                                    handleChange(
                                        expIndex,
                                        "endDate",
                                        e.target.value
                                    )
                                }
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
                            value={item.jobRole}
                            onChange={(e) =>
                                handleChange(
                                    expIndex,
                                    "jobRole",
                                    e.target.value
                                )
                            }
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
                                    value={item.bulletPoints[point - 1]}
                                    onChange={(e) =>
                                        handleBulletPointChange(
                                            e.target.value,
                                            expIndex,
                                            point - 1
                                        )
                                    }
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

const ProjectSection = ({ projects }) => {
    const [projectList, setProjectList] = useState(projects);
    const dispatch = useDispatch();

    const handleChange = (value, index, field) => {
        const updated = projectList.map((p, i) =>
            i === index ? { ...p, [field]: value } : p
        );
        setProjectList(updated);
    };

    const handleBulletPointChange = (value, projectIndex, bulletIndex) => {
        const updatedProjects = projectList.map((project, i) => {
            if (i === projectIndex) {
                const updatedBulletPoints = [...project.bulletPoints];
                updatedBulletPoints[bulletIndex] = value;

                return {
                    ...project,
                    bulletPoints: updatedBulletPoints,
                };
            }
            return project;
        });

        setProjectList(updatedProjects);
    };

    const addProject = () => {
        if (projectList.length < 3) {
            setProjectList((prev) => [...prev, prev.length + 1]);
        }
    };

    useEffect(() => {
        dispatch(changeProjects(projectList));
    }, [projectList]);

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
            {projectList.map((items, idx) => (
                <div key={idx + 1} className="space-y-4 border-t pt-6">
                    <div className="text-lg font-semibold text-gray-700">
                        Project {idx + 1}
                    </div>

                    {/* Project Name */}
                    <div className="flex flex-col space-y-1">
                        <label
                            htmlFor={`project-${idx + 1}-name`}
                            className="text-sm font-medium text-gray-700"
                        >
                            Project Name
                        </label>
                        <input
                            value={items.projectName}
                            onChange={(e) =>
                                handleChange(e.target.value, idx, "projectName")
                            }
                            id={`project-${idx + 1}-name`}
                            type="text"
                            placeholder="Enter project name..."
                            className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-dark-red focus:border-transparent transition-all"
                        />
                    </div>

                    {/* Short Description */}
                    <div className="flex flex-col space-y-1">
                        <label
                            htmlFor={`project-${idx + 1}-desc`}
                            className="text-sm font-medium text-gray-700"
                        >
                            Short Description
                        </label>
                        <textarea
                            value={items.description}
                            onChange={(e) =>
                                handleChange(e.target.value, idx, "description")
                            }
                            id={`project-${idx + 1}-desc`}
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
                                    htmlFor={`project-${
                                        idx + 1
                                    }-point-${point}`}
                                    className="text-sm font-medium text-gray-700"
                                >
                                    Point {point}
                                </label>
                                <input
                                    id={`project-${idx + 1}-point-${point}`}
                                    type="text"
                                    value={items.bulletPoints[point - 1]}
                                    onChange={(e) =>
                                        handleBulletPointChange(
                                            e.target.value,
                                            idx,
                                            point - 1
                                        )
                                    }
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

function PersonalSection({ personalInfo }) {
    const [name, setName] = useState(personalInfo.name || "");
    const [address, setAddress] = useState(personalInfo.address || "");
    const [email, setEmail] = useState(personalInfo.email || "");
    const [github, setGithub] = useState(personalInfo.github || "");
    const [linkedIn, setlinkedIn] = useState(personalInfo.linkedIn || "");

    const dispatch = useDispatch();

    useEffect(() => {
        if (name || address || email || github || linkedIn) {
            dispatch(
                changePersonalInfo({ name, address, email, github, linkedIn })
            );
        }
    }, [name, address, email, github, linkedIn, dispatch]);

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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={github}
                    onChange={(e) => setGithub(e.target.value)}
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
                    value={linkedIn}
                    onChange={(e) => setlinkedIn(e.target.value)}
                    id="linkedin"
                    type="url"
                    placeholder="https://www.linkedin.com/in/username"
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-dark-red focus:border-transparent transition-all"
                />
            </div>
        </div>
    );
}
