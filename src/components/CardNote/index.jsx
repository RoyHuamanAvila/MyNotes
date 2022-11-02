import './styles.css';
import { Modal } from "@mui/material";
import { useDispatch } from "react-redux";
import { archiveNote, unArchiveNote } from "../../features/notes/noteSlice";
import { useState } from "react";
import WindowConfirmation from "../WindowConfirmation";

const CardNote = ({ note, handleEditNote }) => {
    const [openConfirmModal, setOpenConfirmModal] = useState(false);

    const dispatch = useDispatch();

    const handleArchiveNote = (id) => {
        dispatch(archiveNote(id));
    }

    const handleUnArchiveNote = (id) => {
        dispatch(unArchiveNote(id));
    }

    return (
        <div className="card">
            <div>
                <span className="material-icons-sharp card-icon">sticky_note_2</span>
            </div>
            <div className="card-content">
                <p className="card-title">{note?.title}</p>
                <p className="date-updated">{`Last edited: ${note?.dateUpdated}`}</p>
                <div className="card-buttons">
                    {
                        note.archived ? (
                            <span className="material-icons-sharp" onClick={() => handleUnArchiveNote(note._id)}>unarchive</span>
                        ) : (
                            <span onClick={() => handleArchiveNote(note._id)} className="material-icons-sharp">archive</span>
                        )
                    }
                    <span className="material-icons-sharp" onClick={() => handleEditNote(note)}>edit</span>
                    <span className="material-icons-sharp" onClick={() => setOpenConfirmModal(true)}>delete_forever</span>
                </div>
            </div>
            <Modal open={openConfirmModal} onClose={() => setOpenConfirmModal(false)}>
                <>
                    <WindowConfirmation noteID={note._id} setCloseModal={setOpenConfirmModal} />
                </>
            </Modal>
        </div>
    )
}

export default CardNote;
