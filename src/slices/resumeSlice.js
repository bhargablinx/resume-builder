import { createSlice } from "@reduxjs/toolkit";

const resumeSlice = createSlice({
    name: "resume",
    initialState: {
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
    },
    reducers: {
        changePersonalInfo: (state, action) => {
            state.personalInfo.name = action.payload.name;
            state.personalInfo.address = action.payload.address;
            state.personalInfo.email = action.payload.email;
            state.personalInfo.githubLink = action.payload.github;
            state.personalInfo.linkedInLink = action.payload.linkedIn;
        },
        changeSkills: (state, action) => {
            state.skill = action.payload;
        },
        changeProjects: (state, action) => {
            state.projects = action.payload;
        },
        changeExperience: (state, action) => {},
        changeEducation: (state, action) => {},
    },
});

export const {
    changePersonalInfo,
    changeSkills,
    changeProjects,
    changeExperience,
    changeEducation,
} = resumeSlice.actions;

export default resumeSlice.reducer;
