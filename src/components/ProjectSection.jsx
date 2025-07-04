import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { changeProjects } from "../slices/resumeSlice";

export default function ProjectSection({ projects }) {
    const [projectList, setProjectList] = useState(projects);
    const dispatch = useDispatch();

    useEffect(() => {
        setProjectList(projects); // Update local state when Redux skill updates
    }, [projects]);

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
}
