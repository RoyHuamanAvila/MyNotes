import { Modal } from "@mui/material";

const ModalNote = ({note, handleCloseModal}) => {
    return(
        <div style={{backgroundColor: 'white'}}>
            <h1>Create/Edit note</h1>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" value={note?.title}/>
            <label htmlFor="content">Content</label>
            <textarea name="content" value={note?.content}></textarea>
            <button onClick={handleCloseModal}>Cancel</button>
            <button>Save</button>
        </div>
    )
}

export default ModalNote;
