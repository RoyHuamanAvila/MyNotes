import { Modal } from "@mui/material";
import { useEffect, useState } from "react";

const ModalNote = ({ editNote, handleCloseModal }) => {
    const [newNote, setNewNote] = useState({
        title: '',
        content: ''
    });

    const handleInsertData = (e) => {
        setNewNote({ ...newNote, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        if (editNote) {
            setNewNote(editNote)
        }
    }, [])

    return (
        <div style={{ backgroundColor: 'white' }}>
            <h1>Create/Edit note</h1>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" value={newNote?.title} onChange={handleInsertData} />
            <label htmlFor="content">Content</label>
            <textarea name="content" value={newNote?.content} onChange={handleInsertData}></textarea>
            <button onClick={handleCloseModal}>Cancel</button>
            <button>Save</button>
        </div>
    )
}

export default ModalNote;
