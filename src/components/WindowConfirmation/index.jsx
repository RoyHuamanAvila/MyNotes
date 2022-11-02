import { useDispatch } from "react-redux"
import { deleteNote } from "../../features/notes/noteSlice";

const WindowConfirmation = ({ noteID, setCloseModal }) => {
    const dispatch = useDispatch();

    const handleDeleteNote = () => {
        dispatch(deleteNote(noteID));
    }

    return (
        <div style={{ backgroundColor: "white" }} className="window">
            <p>Are you sure you want to delete this note?</p>
            <div>
                <button onClick={handleDeleteNote}>Yes</button>
                <button onClick={() => setCloseModal(false)}>No</button>
            </div>
        </div>
    )
}

export default WindowConfirmation;
