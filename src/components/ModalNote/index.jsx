import './styles.css';
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
        <div className='note-modal'>
            <div className="content-modal">
                <h1>Create/Edit note</h1>
                <div className="input-container">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" value={newNote?.title} onChange={handleInsertData} />
                </div>
                <div className="input-container">
                    <label htmlFor="content">Content</label>
                    <textarea name="content" value={newNote?.content} onChange={handleInsertData}></textarea>
                </div>
                <div className='buttons-modal'>
                    <button onClick={handleCloseModal}>Cancel</button>
                    <button>Save</button>
                </div>
            </div>
        </div>
    )
}

export default ModalNote;
