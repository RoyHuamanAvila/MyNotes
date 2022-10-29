const CardNote = ({title, dateUpdated}) => {
    return(
        <div className="card">
            <div className="card-icon">

            </div>
            <div className="card-content">
                <p className="title">{title}</p>
                <p className="date-updated">{dateUpdated}</p>
                <div className="card-buttons">
                    <span className="material-icons-sharp">archive</span>
                    <span className="material-icons-sharp">edit</span>
                    <span className="material-icons-sharp">delete_forever</span>
                </div>
            </div>
        </div>
    )
}

export default CardNote;
