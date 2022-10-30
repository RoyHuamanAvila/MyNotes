import { useState } from "react";
import { useSelector } from "react-redux";
import CardNote from "../components/CardNote";
import { Link } from "react-router-dom";
import ModalNote from "../components/ModalNote";
import { Modal } from "@mui/material";

const Home = () => {
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

    return(
        <div id="home">
            <header>
                <h1>My Notes</h1>
                <button onClick={() => setOpenModal(true)} className="button-create">Create note</button>
                <Link to='/archived-notes'>Archived notes</Link>
            </header>
            <div className="notes-list">
                {
                    notes
                        .filter(note => !note.archived)
                        .map(note => <CardNote handleEditNote={handleEditNote} key={note._id} note={note}/>)
                }
            </div>
            <Modal open={openModal} onClose={handleCloseModal}>
                <ModalNote note={noteEdit} handleCloseModal={handleCloseModal} />
            </Modal>
        </div>
    )
}

export default Home;
