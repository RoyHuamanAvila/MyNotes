import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        title: '',
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
