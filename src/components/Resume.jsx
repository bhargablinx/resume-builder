import { useSelector } from "react-redux";

export const Resume = () => {
    const { personalInfo, projects, experience, education } = useSelector(
        (state) => state.resume
    );

    return (
        <div className="w-[650px] sticky top-0 max-h-screen overflow-y-auto border border-gray-300 shadow-2xl py-6 px-10 flex flex-col gap-5 bg-white">
            {/* Header */}
            <header className="text-center">
                <div className="text-[28px] font-bold">{personalInfo.name}</div>
                <ul className="flex justify-center gap-2 text-[11px] list-none text-gray-800 flex-wrap">
                    <li>{personalInfo.address}</li>
                    <li>&#8226;</li>
                    <li>{personalInfo.email}</li>
                    <li>&#8226;</li>
                    <li className="underline">
                        <a
                            href={personalInfo.githubLink}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline"
                        >
                            GitHub
                        </a>
                    </li>
                    <li>&#8226;</li>
                    <li className="underline">
                        <a
                            href={personalInfo.linkedInLink}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline"
                        >
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </header>

            {/* SKILLS */}
            <SectionHeading sectionName="SKILLS">
                <ul className="text-[11px] space-y-0.5 leading-tight tracking-tight">
                    <li>
                        <span className="font-bold">Web Technologies</span>:
                        HTML, CSS, JavaScript, TailwindCSS, ReactJS, Redux
                    </li>
                    <li>
                        <span className="font-bold">Tools & Platform</span>:
                        Git, GitHub, Linux
                    </li>
                </ul>
            </SectionHeading>

            {/* PROJECTS */}
            <SectionHeading sectionName="PROJECTS">
                {projects.map((project, index) => (
                    <ProjectSection
                        key={index}
                        projectName={project.projectName}
                    >
                        <div className="text-[11px] leading-tight tracking-tight">
                            {project.description}
                        </div>
                        <ul className="list-disc list-inside space-y-0.5 text-[11px] ml-4 mt-1 leading-tight tracking-tight">
                            {project.bulletPoints.map((point, idx) => (
                                <li key={idx}>{point}</li>
                            ))}
                        </ul>
                    </ProjectSection>
                ))}
            </SectionHeading>

            {/* EXPERIENCE */}
            <SectionHeading sectionName="EXPERIENCE">
                {experience.map((exp, index) => (
                    <JobSection
                        key={index}
                        companyName={exp.companyName}
                        startDate={exp.startDate}
                        endDate={exp.endDate}
                        jobRole={exp.jobRole}
                    >
                        <ul className="list-disc list-inside space-y-0.5 text-[11px] ml-4 mt-1 leading-tight tracking-tight">
                            {exp.bulletPoints.map((point, idx) => (
                                <li key={idx}>{point}</li>
                            ))}
                        </ul>
                    </JobSection>
                ))}
            </SectionHeading>

            {/* EDUCATION */}
            <SectionHeading sectionName="EDUCATION">
                {education.map((edu, index) => (
                    <EducationSection
                        key={index}
                        institute={edu.institute}
                        degree={edu.degree}
                        startDate={edu.startDate}
                        endDate={edu.endDate}
                    >
                        <ul className="list-disc list-inside space-y-0.5 text-[11px] ml-4 mt-1 leading-tight tracking-tight">
                            <li>CGPA: {edu.cgpa}</li>
                            <li>{edu.otherInfo}</li>
                        </ul>
                    </EducationSection>
                ))}
            </SectionHeading>
        </div>
    );
};

// Shared Section Heading
function SectionHeading({ children, sectionName }) {
    return (
        <section aria-labelledby={sectionName.toLowerCase()}>
            <h2
                id={sectionName.toLowerCase()}
                className="text-[18px] font-bold mb-2 tracking-tight"
            >
                {sectionName}
            </h2>
            <hr className="mb-1 border-gray-400" />
            {children}
        </section>
    );
}

// Project Section
function ProjectSection({ children, projectName }) {
    return (
        <div className="my-2">
            <div className="text-[15px] font-bold">{projectName}</div>
            {children}
        </div>
    );
}

// Experience Section
function JobSection({ children, companyName, startDate, endDate, jobRole }) {
    return (
        <div className="my-2">
            <div className="flex justify-between items-center">
                <div className="text-[15px] font-bold">{companyName}</div>
                <div className="text-gray-600 text-[11px] italic tracking-wider">
                    {startDate} - {endDate}
                </div>
            </div>
            <div className="text-[11px] font-semibold">{jobRole}</div>
            {children}
        </div>
    );
}

// Education Section
function EducationSection({ institute, degree, startDate, endDate, children }) {
    return (
        <div className="my-2">
            <div className="flex justify-between items-center">
                <div className="text-[15px] font-bold">{institute}</div>
                <div className="text-gray-600 text-[11px] italic tracking-wider">
                    {startDate} - {endDate}
                </div>
            </div>
            <div className="text-[11px] font-semibold">{degree}</div>
            {children}
        </div>
    );
}
