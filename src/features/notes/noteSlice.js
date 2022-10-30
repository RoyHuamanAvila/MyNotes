import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        title: 'Note 1',
        content: '',
        dateUpdated: Date.now(),
        archived: false
    },
    {
        title: 'Note 2',
        content: '',
        dateUpdated: Date.now(),
        archived: true
    }
]

export const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        createNote: (state, action) => {

        },
        editNote: (state, action) => {

        },
        deleteNote: (state, action) => {
            
        }
    }
})

export const {createNote} = noteSlice.actions; 
export default noteSlice.reducer;
