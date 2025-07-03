export const Resume = () => {
    return (
        <div className="border sticky top-3 border-gray-300 shadow-2xl w-[595px] min-h-[842px] h-fit py-4 px-8 flex flex-col gap-4 bg-white">
            {/* Header */}
            <header className="text-center">
                <div className="text-[26px] font-bold">BHARGAB BHUYAN</div>
                <ul className="flex justify-center gap-2 text-[11px] list-none text-gray-800">
                    <li>Assam, India</li>
                    <li>&#8226;</li>
                    <li>bhargabbhuyan001@gmail.com</li>
                    <li>&#8226;</li>
                    <li className="underline">
                        <a
                            href="https://github.com/bhargab001"
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
                            href="https://linkedin.com/in/your-profile"
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
                <ProjectSection projectName="Demo Project 1">
                    <div className="text-[11px] leading-tight tracking-tight">
                        A résumé generator built with React. Dynamic and fully
                        editable résumé generator that allows users to:
                    </div>
                    <ul className="list-disc list-inside space-y-0.5 text-[11px] ml-4 mt-1 leading-tight tracking-tight">
                        <li>
                            Input and manage general information, education, and
                            work experience
                        </li>
                        <li>
                            Edit and resubmit data with prefilled input fields
                            for seamless updates
                        </li>
                        <li>
                            View a live preview of the CV using conditional
                            rendering and form state management
                        </li>
                    </ul>
                </ProjectSection>
                <ProjectSection projectName="Demo Project 2">
                    <div className="text-[11px] leading-tight tracking-tight">
                        A résumé generator built with React. Dynamic and fully
                        editable résumé generator that allows users to:
                    </div>
                    <ul className="list-disc list-inside space-y-0.5 text-[11px] ml-4 mt-1 leading-tight tracking-tight">
                        <li>
                            Input and manage general information, education, and
                            work experience
                        </li>
                        <li>
                            Edit and resubmit data with prefilled input fields
                            for seamless updates
                        </li>
                        <li>
                            View a live preview of the CV using conditional
                            rendering and form state management
                        </li>
                    </ul>
                </ProjectSection>
                <ProjectSection projectName="Demo Project 3">
                    <div className="text-[11px] leading-tight tracking-tight">
                        A résumé generator built with React. Dynamic and fully
                        editable résumé generator that allows users to:
                    </div>
                    <ul className="list-disc list-inside space-y-0.5 text-[11px] ml-4 mt-1 leading-tight tracking-tight">
                        <li>
                            Input and manage general information, education, and
                            work experience
                        </li>
                        <li>
                            Edit and resubmit data with prefilled input fields
                            for seamless updates
                        </li>
                        <li>
                            View a live preview of the CV using conditional
                            rendering and form state management
                        </li>
                    </ul>
                </ProjectSection>
            </SectionHeading>

            {/* EXPERIENCE */}
            <SectionHeading sectionName="EXPERIENCE">
                <JobSection
                    companyName="Microsoft"
                    startDate="Nov, 2019"
                    endDate="Sept, 2024"
                    jobRole="Jr. Software Engineer"
                >
                    <ul className="list-disc list-inside space-y-0.5 text-[11px] ml-4 mt-1 leading-tight tracking-tight">
                        <li>
                            Developed and managed web applications using
                            ReactJS, Redux, RTK Query, and TypeScript.
                        </li>
                        <li>
                            Migrated the front-end codebase from CRA to Vite,
                            improving developer productivity and reducing build
                            time.
                        </li>
                        <li>
                            Streamlined Redux store structure, reducing load
                            time by 25% and improving performance.
                        </li>
                    </ul>
                </JobSection>
            </SectionHeading>

            {/* EDUCATION */}
            <SectionHeading sectionName="EDUCATION">
                <EducationSection
                    institute="Central Institute of Technology, Kokrajhar"
                    degree="Bachelor of Technology (B.Tech) - Computer Science"
                    startDate="Aug, 2021"
                    endDate="May, 2025"
                >
                    <ul className="list-disc list-inside space-y-0.5 text-[11px] ml-4 mt-1 leading-tight tracking-tight">
                        <li>CGPA: 8.5 (Till 6th Semester)</li>
                        <li>
                            Relevant Coursework: Data Structures, OS, CN, Web
                            Dev
                        </li>
                    </ul>
                </EducationSection>
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
