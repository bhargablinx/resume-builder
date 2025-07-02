export const Resume = () => {
    return (
        <div className="border border-gray-300 shadow-2xl w-[595px] h-[842px] p-4 px-8 flex flex-col gap-4">
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
                <div className="text-[14px] font-bold">Resume Builder</div>
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
                        Edit and resubmit data with prefilled input fields for
                        seamless updates
                    </li>
                    <li>
                        View a live preview of the CV using conditional
                        rendering and form state management
                    </li>
                </ul>
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
