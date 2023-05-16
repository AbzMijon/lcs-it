import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   shemeTextBlocks: [
        {
            id: 0,
            title: 'Contact us',
            text: 'Fill out the contact form, briefly describe your project or ask us a question',
        },
        {
            id: 1,
            title: 'Discovery call',
            text: 'Our Project Manager will arrange a video meeting with you in order to clarify the project assumptions',
        },
        {
            id: 2,
            title: 'Project estimation',
            text: 'On the basis of the collected information, we will prepare an estimate of the costs and  duration of the project',
        },
   ],
}

const schemeReducer = createSlice({
    name: "shemeReducer",
    initialState: initialState,
    reducers: {},
});

export default schemeReducer.reducer;

export const {  } = schemeReducer.actions;