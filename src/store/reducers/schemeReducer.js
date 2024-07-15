import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shemeTextBlocks: [
            {
                id: 0,
                title: 'schemaWorkSection.firstBlock.title',
                text: 'schemaWorkSection.firstBlock.subtitle',
            },
            {
                id: 1,
                title: 'schemaWorkSection.secondBlock.title',
                text: 'schemaWorkSection.secondBlock.subtitle',
            },
            {
                id: 2,
                title: 'schemaWorkSection.thirdBlock.title',
                text: 'schemaWorkSection.thirdBlock.subtitle',
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