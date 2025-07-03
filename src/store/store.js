import { configureStore } from "@reduxjs/toolkit";
import resumeSlice from "../slices/resumeSlice";

export const store = configureStore({
    reducer: {
        resume: resumeSlice,
    },
});
