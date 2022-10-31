const CardNote = ({ note, handleEditNote }) => {

    return (
        <div className="card">
            <div className="card-icon">
                <span className="material-icons-sharp">sticky_note_2</span>
            </div>
            <div className="card-content">
                <p className="title">{note?.title}</p>
                <p className="date-updated">{note?.dateUpdated}</p>
                <div className="card-buttons">
                    <span className="material-icons-sharp">archive</span>
                    <span className="material-icons-sharp" onClick={() => handleEditNote(note)}>edit</span>
                    <span className="material-icons-sharp">delete_forever</span>
                </div>
            </div>
        </div>
    )
}

export default CardNote;
