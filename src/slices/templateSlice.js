import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedTemplateId: 1,
};

const templateSlice = createSlice({
    name: "template",
    initialState,
    reducers: {
        selectTemplate: (state, action) => {
            state.selectedTemplateId = action.payload;
        },
    },
});

export const { selectTemplate } = templateSlice.actions;
export default templateSlice.reducer;
