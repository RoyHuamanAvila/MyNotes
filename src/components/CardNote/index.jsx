const CardNote = ({title, dateUpdated}) => {
    return(
        <div className="card">
            <div className="card-icon">

            </div>
            <div className="card-content">
                <p className="title">{title}</p>
                <p className="date-updated">{dateUpdated}</p>
                <div className="card-buttons">
                </div>
            </div>
        </div>
    )
}

export default CardNote;
