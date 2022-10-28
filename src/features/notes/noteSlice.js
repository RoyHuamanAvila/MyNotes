import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        title: 'Note 1',
        content: ''
    },
    {
        title: 'Note 2',
        content: ''
    }
]

export const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        createNote: (state, action) => {

        }
    }
})

export const {createNote} = noteSlice.actions; 
export default noteSlice.reducer;
