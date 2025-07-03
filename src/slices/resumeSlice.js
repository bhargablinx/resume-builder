import { createSlice } from "@reduxjs/toolkit";

const resumeSlice = createSlice({
    name: "resume",
    initialState: {
        name: "Bhargab Bhuyan",
        address: "Assam, India",
        email: "bhargabbhuyan001@gmail.com",
        githubLink: "https://github.com/bhargablinx",
        linkedInLink: "https://www.linkedin.com/in/bhargabb/",
        projects: [
            {
                projectName: "Demo Project 1",
            },
        ],
    },
    reducers: {},
});

export default resumeSlice.reducer;
