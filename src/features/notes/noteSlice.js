import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        _id: '1',
        title: 'Note 1',
        content: '',
        dateUpdated: Date.now(),
        archived: false
    },
    {
        _id: '2',
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
