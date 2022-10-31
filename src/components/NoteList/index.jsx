import { Modal } from "@mui/material";
import { useSelector } from "react-redux";
import { useState } from "react";
import CardNote from "../CardNote";
import ModalNote from "../ModalNote";

const NoteList = ({ inArchive }) => {
    const notes = useSelector(state => state.notes);
    const [openModal, setOpenModal] = useState(false);
    const [noteEdit, setNoteEdit] = useState({});

    const handleCloseModal = () => {
        setOpenModal(false);
        setNoteEdit({});
    }

    const handleEditNote = (note) => {
        setOpenModal(true);
        setNoteEdit(note);
    }

    return (
        <div className="notes-list">
            {
                inArchive ? (
                    notes.filter(note => note.archived)
                        .map(note => <CardNote note={note} handleEditNote={handleEditNote} />)
                ) : (
                    notes.filter(note => !note.archived)
                        .map(note => <CardNote note={note} handleEditNote={handleEditNote} />)
                )
            }
            <Modal open={openModal} onClose={handleCloseModal}>
                <>
                    <ModalNote editNote={noteEdit} handleCloseModal={handleCloseModal} />
                </>
            </Modal>
        </div>

    )
}

export default NoteList;
