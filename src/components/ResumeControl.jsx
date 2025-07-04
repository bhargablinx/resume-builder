import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PersonalSection from "./PersonalSection";
import ProjectSection from "./ProjectSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import SkillSection from "./SkillSection";
import { clearFields, loadData } from "../slices/resumeSlice";

export const ResumeControl = () => {
    const dispatch = useDispatch();
    const { personalInfo, skill, projects, experience, education } =
        useSelector((state) => state.resume);

    const demoData = {
        personalInfo: {
            name: "Bhargab Bhuyan",
            address: "Assam, India",
            email: "bhargabbhuyan001@gmail.com",
            githubLink: "https://github.com/bhargablinx",
            linkedInLink: "https://www.linkedin.com/in/bhargabb/",
        },
        skill: [
            {
                categoryName: "Web Technologies",
                skills: "HTML, CSS, JavaScript, TailwindCSS, ReactJS, Redux",
            },
            {
                categoryName: "Tools & Platform",
                skills: "Git, GitHub, Linux",
            },
        ],
        projects: [
            {
                projectName: "Demo Project 1",
                description:
                    "A résumé generator built with React. Dynamic and fully editable résumé generator that allows users to:",
                bulletPoints: [
                    "Input and manage general information, education, and work experience",
                    "Edit and resubmit data with prefilled input fields for seamless updates",
                    "View a live preview of the CV using conditional rendering and form state management",
                ],
            },
            {
                projectName: "Demo Project 2",
                description:
                    "A résumé generator built with React. Dynamic and fully editable résumé generator that allows users to:",
                bulletPoints: [
                    "Input and manage general information, education, and work experience",
                    "Edit and resubmit data with prefilled input fields for seamless updates",
                    "View a live preview of the CV using conditional rendering and form state management",
                ],
            },
            {
                projectName: "Demo Project 3",
                description:
                    "A résumé generator built with React. Dynamic and fully editable résumé generator that allows users to:",
                bulletPoints: [
                    "Input and manage general information, education, and work experience",
                    "Edit and resubmit data with prefilled input fields for seamless updates",
                    "View a live preview of the CV using conditional rendering and form state management",
                ],
            },
        ],
        experience: [
            {
                companyName: "Microsoft",
                startDate: "Nov, 2019",
                endDate: "Sept, 2024",
                jobRole: "Jr. Software Engineer",
                bulletPoints: [
                    "Developed and managed web applications using ReactJS, Redux, RTK Query, and TypeScript.",
                    "Migrated the front-end codebase from CRA to Vite, improving developer productivity and reducing build time.",
                    "Streamlined Redux store structure, reducing load time by 25% and improving performance.",
                ],
            },
        ],
        education: [
            {
                institute: "Central Institute of Technology, Kokrajhar",
                degree: "Bachelor of Technology (B.Tech) - Computer Science",
                startDate: "Aug, 2021",
                endDate: "May, 2025",
                cgpa: "8.5",
                otherInfo:
                    "Relevant Coursework: Data Structures, OS, CN, Web Dev",
            },
        ],
    };

    const handleClearField = () => {
        dispatch(clearFields());
    };

    const handleLoadData = () => {
        dispatch(loadData(demoData));
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
                <button
                    onClick={handleLoadData}
                    className="border border-blue-400 text-blue-500 hover:bg-blue-50 px-4 py-1.5 rounded-md text-sm font-medium transition-all cursor-pointer"
                >
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
