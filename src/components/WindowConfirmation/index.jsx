import './styles.css';
import { useDispatch } from "react-redux"
import { deleteNote } from "../../features/notes/noteSlice";

const WindowConfirmation = ({ noteID, setCloseModal }) => {
    const dispatch = useDispatch();

    const handleDeleteNote = () => {
        dispatch(deleteNote(noteID));
    }

    return (
        <div className="window-confirmation">
            <div className="window-content">
                <p>Are you sure you want to delete this note?</p>
                <div className='buttons-window'>
                    <button onClick={handleDeleteNote}>Yes</button>
                    <button onClick={() => setCloseModal(false)}>No</button>
                </div>
            </div>
        </div>
    )
}

export default WindowConfirmation;
