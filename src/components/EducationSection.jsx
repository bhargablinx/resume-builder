import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { changeEducation } from "../slices/resumeSlice";

export default function EducationSection({ education }) {
    const [educationList, setEducationList] = useState(education);
    const dispatch = useDispatch();

    useEffect(() => {
        setEducationList(education); // Update local state when Redux skill updates
    }, [education]);

    const handleChange = (index, field, value) => {
        const updated = educationList.map((ed, i) =>
            i === index ? { ...ed, [field]: value } : ed
        );
        setEducationList(updated);
    };

    const addEducation = () => {
        if (educationList.length < 3) {
            setEducationList((prev) => [...prev, prev.length + 1]);
        }
    };

    useEffect(() => {
        dispatch(changeEducation(educationList));
    }, [educationList]);

    return (
        <div className="bg-white w-full max-w-[500px] p-6 rounded-xl border border-gray-300 shadow-sm space-y-6 transition hover:shadow-lg">
            {/* Header */}
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-dark-red flex items-center gap-2">
                    <i className="fa-solid fa-graduation-cap text-lg"></i>
                    <span>EDUCATION</span>
                    <span className="text-[10px] mt-2">(max 3 categories)</span>
                </h2>
                {educationList.length < 3 && (
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
            {educationList.map((edu, num) => (
                <div key={num} className="space-y-4 border-t pt-6">
                    <div className="text-lg font-semibold text-gray-700">
                        Education {num + 1}
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
                            value={edu.institute}
                            onChange={(e) =>
                                handleChange(num, "institute", e.target.value)
                            }
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
                            value={edu.degree}
                            onChange={(e) =>
                                handleChange(num, "degree", e.target.value)
                            }
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
                                value={edu.startDate}
                                onChange={(e) =>
                                    handleChange(
                                        num,
                                        "startDate",
                                        e.target.value
                                    )
                                }
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
                                value={edu.endDate}
                                onChange={(e) =>
                                    handleChange(num, "endDate", e.target.value)
                                }
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
                            value={edu.cgpa}
                            onChange={(e) =>
                                handleChange(num, "cgpa", e.target.value)
                            }
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
                            value={edu.otherInfo}
                            onChange={(e) =>
                                handleChange(num, "otherInfo", e.target.value)
                            }
                            type="text"
                            placeholder="e.g. Member of coding club, etc."
                            className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-dark-red focus:border-transparent"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
