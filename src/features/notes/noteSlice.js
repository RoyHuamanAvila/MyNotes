import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        _id: '1',
        title: 'Note 1',
        content: 'Description note 1',
        dateUpdated: Date.now(),
        archived: false
    },
    {
        _id: '2',
        title: 'Note 2',
        content: 'Description note 2',
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
            
        },
        archiveNote: (state, action) => {
            const id = action.payload;
            const foundNote = state.find(note => note._id === id)

            if(foundNote) {
                foundNote.archived = true;
            }
        },
        unArchiveNote: (state, action) => {
                        const id = action.payload;
            const foundNote = state.find(note => note._id === id)

            if(foundNote) {
                foundNote.archived = false;
            }
        }
    }
})

export const {createNote, archiveNote, unArchiveNote} = noteSlice.actions; 
export default noteSlice.reducer;
