import { useDispatch } from "react-redux";
import { archiveNote, unArchiveNote } from "../../features/notes/noteSlice";

const CardNote = ({ note, handleEditNote }) => {

    const dispatch = useDispatch();

    const handleArchiveNote = (id) => {
        dispatch(archiveNote(id));
    }

    const handleUnArchiveNote = (id) => {
        dispatch(unArchiveNote(id));
    }

    return (
        <div className="card">
            <div className="card-icon">
                <span className="material-icons-sharp">sticky_note_2</span>
            </div>
            <div className="card-content">
                <p className="title">{note?.title}</p>
                <p className="date-updated">{note?.dateUpdated}</p>
                <div className="card-buttons">
                    {
                        note.archived ? (
                            <span className="material-icons-sharp" onClick={() => handleUnArchiveNote(note._id)}>unarchive</span>
                        ) : (
                            <span onClick={() => handleArchiveNote(note._id)} className="material-icons-sharp">archive</span>
                        )
                    }
                    <span className="material-icons-sharp" onClick={() => handleEditNote(note)}>edit</span>
                    <span className="material-icons-sharp">delete_forever</span>
                </div>
            </div>
        </div>
    )
}

export default CardNote;
