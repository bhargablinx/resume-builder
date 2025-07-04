import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PersonalSection from "./PersonalSection";
import ProjectSection from "./ProjectSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import SkillSection from "./SkillSection";
import { clearFields } from "../slices/resumeSlice";

export const ResumeControl = () => {
    const { personalInfo, skill, projects, experience, education } =
        useSelector((state) => state.resume);
    const dispatch = useDispatch();

    const handleClearField = () => {
        dispatch(clearFields());
    };

    return (
        <div className="flex-1 flex flex-col items-center gap-[30px]">
            <div className="flex justify-center gap-4">
                <button
                    onClick={handleClearField}
                    className="border border-red-400 text-red-500 hover:bg-red-50 px-4 py-1.5 rounded-md text-sm font-medium transition-all cursor-pointer"
                >
                    Clear Fields
                </button>
                <button className="bg-dark-red text-white hover:bg-red-700 px-4 py-1.5 rounded-md text-sm font-medium transition-all cursor-pointer">
                    Save
                </button>
                <button className="border border-blue-400 text-blue-500 hover:bg-blue-50 px-4 py-1.5 rounded-md text-sm font-medium transition-all cursor-pointer">
                    Load Sample
                </button>
            </div>

            <PersonalSection personalInfo={personalInfo} />
            <SkillSection skill={skill} />
            <ProjectSection projects={projects} />
            <ExperienceSection experience={experience} />
            <EducationSection education={education} />
        </div>
    );
};
