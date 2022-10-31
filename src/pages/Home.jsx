import { useState } from "react";
import { useSelector } from "react-redux";
import CardNote from "../components/CardNote";
import { Link } from "react-router-dom";
import ModalNote from "../components/ModalNote";
import { Modal } from "@mui/material";
import NoteList from "../components/NoteList";

const Home = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div id="home">
            <header>
                <h1>My Notes</h1>
                <button onClick={() => setOpenModal(true)} className="button-create">Create note</button>
                <Link to='/archived-notes'>Archived notes</Link>
            </header>
            <NoteList />
            <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <ModalNote />
            </Modal>
        </div>
    )
}

export default Home;
