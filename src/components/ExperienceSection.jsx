import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { changeExperience } from "../slices/resumeSlice";

export default function ExperienceSection({ experience }) {
    const [experienceList, setExperienceList] = useState(experience || []);
    const dispatch = useDispatch();

    useEffect(() => {
        setExperienceList(experience); // Update local state when Redux skill updates
    }, [experience]);

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
        if (experienceList.length < 3) {
            setExperienceList((prev) => [
                ...prev,
                {
                    companyName: "",
                    startDate: "",
                    endDate: "",
                    jobRole: "",
                    bulletPoints: ["", "", ""],
                },
            ]);
        }
    };

    const removeExperienceCategory = (index) => {
        const updated = experienceList.filter((_, i) => i !== index);
        setExperienceList(updated);
    };

    useEffect(() => {
        dispatch(changeExperience(experienceList));
    }, [experienceList]);

    return (
        <div className="bg-white w-full max-w-[500px] p-6 rounded-xl border border-gray-300 shadow-sm space-y-6 transition hover:shadow-lg">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-dark-red flex items-center gap-2">
                    <i className="fa-solid fa-briefcase text-lg"></i>
                    <span>EXPERIENCE</span>
                    <span className="text-[10px] mt-2">(max 3 categories)</span>
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
                        <div className="flex justify-between mb-2">
                            <label className="text-sm font-medium text-gray-700">
                                Company Name
                            </label>
                            <button
                                onClick={() =>
                                    removeExperienceCategory(expIndex)
                                }
                                className="text-red-500 hover:text-red-700 text-[10px]"
                                title="Remove this skill category"
                            >
                                <i className="fa-solid fa-trash"></i>
                            </button>
                        </div>
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
