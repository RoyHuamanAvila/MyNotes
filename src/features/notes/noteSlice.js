import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        title: 'Note 1',
        content: '',
        dateUpdated: Date.now() 
    },
    {
        title: 'Note 2',
        content: '',
        dateUpdated: Date.now()
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
