import { useSelector } from "react-redux";

export const Resume = () => {
    const { personalInfo, projects, experience, education } = useSelector(
        (state) => state.resume
    );

    console.log(personalInfo, projects, experience, education);

    return (
        <div className="border sticky top-3 border-gray-300 shadow-2xl w-[595px] min-h-[842px] h-fit py-4 px-8 flex flex-col gap-4 bg-white">
            {/* Header */}
            <header className="text-center">
                <div className="text-[26px] font-bold">{personalInfo.name}</div>
                <ul className="flex justify-center gap-2 text-[11px] list-none text-gray-800">
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
                {projects.map((project) => {
                    return (
                        <ProjectSection projectName={project.projectName}>
                            <div className="text-[11px] leading-tight tracking-tight">
                                {project.description}
                            </div>
                            <ul className="list-disc list-inside space-y-0.5 text-[11px] ml-4 mt-1 leading-tight tracking-tight">
                                {project.bulletPoints.map((point) => (
                                    <li>{point}</li>
                                ))}
                            </ul>
                        </ProjectSection>
                    );
                })}
            </SectionHeading>

            {/* EXPERIENCE */}
            <SectionHeading sectionName="EXPERIENCE">
                {experience.map((experience) => {
                    return (
                        <JobSection
                            companyName={experience.companyName}
                            startDate={experience.startDate}
                            endDate={experience.endDate}
                            jobRole={experience.jobRole}
                        >
                            <ul className="list-disc list-inside space-y-0.5 text-[11px] ml-4 mt-1 leading-tight tracking-tight">
                                {experience.bulletPoints.map((point) => (
                                    <li>{point}</li>
                                ))}
                            </ul>
                        </JobSection>
                    );
                })}
            </SectionHeading>

            {/* EDUCATION */}
            <SectionHeading sectionName="EDUCATION">
                {education.map((education) => {
                    return (
                        <EducationSection
                            institute={education.institute}
                            degree={education.degree}
                            startDate={education.startDate}
                            endDate={education.endDate}
                        >
                            <ul className="list-disc list-inside space-y-0.5 text-[11px] ml-4 mt-1 leading-tight tracking-tight">
                                <li>CGPA: {education.cgpa}</li>
                                <li>{education.otherInfo}</li>
                            </ul>
                        </EducationSection>
                    );
                })}
            </SectionHeading>
        </div>
    );
};

// Shared section heading
function SectionHeading({ children, sectionName }) {
    return (
        <section aria-labelledby={sectionName.toLowerCase()}>
            <h2
                id={sectionName.toLowerCase()}
                className="text-[16px] font-bold mb-2"
            >
                {sectionName}
            </h2>
            <hr className="mb-1" />
            {children}
        </section>
    );
}

// Project section
function ProjectSection({ children, projectName }) {
    return (
        <div className="my-2">
            <div className="text-[14px] font-bold">{projectName}</div>
            {children}
        </div>
    );
}

// Job section
function JobSection({ children, companyName, startDate, endDate, jobRole }) {
    return (
        <div className="my-2">
            <div className="flex justify-between items-center">
                <div className="text-[14px] font-bold">{companyName}</div>
                <div className="text-gray-600 text-[11px] italic tracking-wider">
                    {startDate} - {endDate}
                </div>
            </div>
            <div className="text-[11px] font-semibold">{jobRole}</div>
            {children}
        </div>
    );
}

// Education section
function EducationSection({ institute, degree, startDate, endDate, children }) {
    return (
        <div className="my-2">
            <div className="flex justify-between items-center">
                <div className="text-[14px] font-bold">{institute}</div>
                <div className="text-gray-600 text-[11px] italic tracking-wider">
                    {startDate} - {endDate}
                </div>
            </div>
            <div className="text-[11px] font-semibold">{degree}</div>
            {children}
        </div>
    );
}
