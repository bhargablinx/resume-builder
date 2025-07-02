export const Resume = () => {
    return (
        <div className="border border-gray-300 shadow-2xl w-[595px] min-h-[842px] h-auto py-4 px-8 flex flex-col gap-4">
            {/* Header */}
            <div className="text-center">
                <div className="text-[26px] font-bold">BHARGAB BHUYAN</div>
                <ul className="flex justify-center gap-2 text-[11px]">
                    <li>Assam, India</li>
                    <li>&#8226;</li>
                    <li>bhargabbhuyan001@gmail.com</li>
                    <li>&#8226;</li>
                    <li>GitHub</li>
                    <li>&#8226;</li>
                    <li>LinkedIn</li>
                </ul>
            </div>
            <SectionHeading sectionName="SKILLS">
                <ul className="text-[11px] space-y-0.5">
                    <li>
                        <spam className="font-bold">Web Technologies</spam>:
                        HTML, CSS, JavaScript, TailwindCSS, ReactJS, Redux
                    </li>
                    <li>
                        <span className="font-bold">Tools & Platform</span>:
                        Git, GitHub, Linux
                    </li>
                </ul>
            </SectionHeading>
            <SectionHeading sectionName="PROJECTS">
                <ProjectSection projectName="Demo Project 1">
                    <div className="text-[11px]">
                        A résumé generator built with React. Dynamic and fully
                        editable resumé generator that allows users to:
                    </div>
                    <ul className="list-disc list-inside space-y-0.5 text-[11px] ml-4 mt-1">
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
                    <div className="text-[11px]">
                        A résumé generator built with React. Dynamic and fully
                        editable resumé generator that allows users to:
                    </div>
                    <ul className="list-disc list-inside space-y-0.5 text-[11px] ml-4 mt-1">
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
                    <div className="text-[11px]">
                        A résumé generator built with React. Dynamic and fully
                        editable resumé generator that allows users to:
                    </div>
                    <ul className="list-disc list-inside space-y-0.5 text-[11px] ml-4 mt-1">
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
            <SectionHeading sectionName="Experience">
                <JobSection
                    companyName="Microsoft"
                    startData="Nov, 2019"
                    endData="Sept, 2024"
                    jobRole="Jr. Software Engineer"
                >
                    <ul className="list-disc list-inside space-y-0.5 text-[11px] ml-4 mt-1">
                        <li>
                            Developed and managed web applications using
                            ReactJS, Redux, RTK Query, and TypeScript.
                        </li>
                        <li>
                            Migrated the front-end code base front CRA to VITE,
                            helping the productivity of developers by reducing
                            development server start time by 20% and production
                            by 8%
                        </li>
                        <li>
                            Streamlined and restructured Redux store, optimizing
                            application's state management; reduced load time by
                            25% and enhanced overall performance.
                        </li>
                    </ul>
                </JobSection>
            </SectionHeading>
            <SectionHeading sectionName="Education">
                <EducationSection
                    institute="Central Institute of Technology, Kokrajhar"
                    degree="Bachelor of Technology (B.Tech) - Computer Science"
                    startDate="Aug, 2021"
                    endDate="May, 2025"
                >
                    <ul className="list-disc list-inside space-y-0.5 text-[11px] ml-4 mt-1">
                        <li>CGPA: 8.5 </li>
                    </ul>
                </EducationSection>
            </SectionHeading>
        </div>
    );
};

function SectionHeading({ children, sectionName }) {
    return (
        <div>
            <div className="text-[16px] font-bold mb-2">{sectionName}</div>
            <hr className="mb-1" />
            {children}
        </div>
    );
}

function ProjectSection({ children, projectName }) {
    return (
        <div className="my-2">
            <div className="text-[14px] font-bold">{projectName}</div>
            {children}
        </div>
    );
}

function JobSection({ children, companyName, startData, endData, jobRole }) {
    return (
        <div className="my-2">
            <div className="flex justify-between items-center">
                <div className="text-[14px] font-bold">{companyName}</div>
                <div className="text-gray-600 text-[11px] italic tracking-wider">
                    {startData} - {endData}
                </div>
            </div>
            <div className="text-[11px] font-semibold">{jobRole}</div>
            {children}
        </div>
    );
}

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
