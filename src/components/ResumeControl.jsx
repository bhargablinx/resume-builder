import { useDispatch, useSelector } from "react-redux";
import PersonalSection from "./PersonalSection";
import ProjectSection from "./ProjectSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import SkillSection from "./SkillSection";
import { clearFields, loadData } from "../slices/resumeSlice";
import { resumeTemplates } from "../utils/TemplateOrder";

export const ResumeControl = ({ templateId }) => {
    const dispatch = useDispatch();

    const { personalInfo, skill, projects, experience, education } =
        useSelector((state) => state.resume);

    const template = resumeTemplates.find((t) => t.id === templateId);

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
                description: "Résumé builder project...",
                bulletPoints: [
                    "Input and manage information",
                    "Edit and resubmit data",
                    "Live preview with state",
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
                    "ReactJS, Redux, RTK Query, TS",
                    "Migrated from CRA to Vite",
                    "Improved Redux store structure",
                ],
            },
        ],
        education: [
            {
                institute: "CIT Kokrajhar",
                degree: "B.Tech - CSE",
                startDate: "Aug, 2021",
                endDate: "May, 2025",
                cgpa: "8.5",
                otherInfo:
                    "Relevant Coursework: Data Structures, OS, CN, Web Dev",
            },
        ],
    };

    const handleClearField = () => dispatch(clearFields());
    const handleLoadData = () => dispatch(loadData(demoData));

    const renderSection = (section) => {
        switch (section) {
            case "SKILLS":
                return <SkillSection key="skills" skill={skill} />;
            case "PROJECTS":
                return <ProjectSection key="projects" projects={projects} />;
            case "EXPERIENCE":
                return (
                    <ExperienceSection
                        key="experience"
                        experience={experience}
                    />
                );
            case "EDUCATION":
                return (
                    <EducationSection key="education" education={education} />
                );
            default:
                return null;
        }
    };

    if (!template) {
        return (
            <div className="text-red-500 text-center mt-10">
                Invalid Template ID.
            </div>
        );
    }

    return (
        <div className="flex-1 flex flex-col items-center gap-[30px]">
            {/* Buttons */}
            <div className="flex justify-center gap-4">
                <button
                    onClick={handleClearField}
                    className="border border-red-400 text-red-500 hover:bg-red-50 px-4 py-1.5 rounded-md text-sm font-medium transition-all"
                >
                    Clear Fields
                </button>
                <button className="bg-dark-red text-white hover:bg-red-700 px-4 py-1.5 rounded-md text-sm font-medium transition-all">
                    Save
                </button>
                <button
                    onClick={handleLoadData}
                    className="border border-blue-400 text-blue-500 hover:bg-blue-50 px-4 py-1.5 rounded-md text-sm font-medium transition-all"
                >
                    Load Sample
                </button>
            </div>

            {/* Resume Preview */}
            <PersonalSection personalInfo={personalInfo} />
            {template.sectionOrder.map(renderSection)}
        </div>
    );
};
