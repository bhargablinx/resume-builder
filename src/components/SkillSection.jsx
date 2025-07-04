import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { changeSkills } from "../slices/resumeSlice";

export default function SkillSection({ skill }) {
    const [skills, setSkills] = useState(skill);
    const dispatch = useDispatch();

    useEffect(() => {
        setSkills(skill); // Update local state when Redux skill updates
    }, [skill]);

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
                    <span>Skills</span>
                    <span className="text-[10px] mt-2">(max 3 categories)</span>
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
