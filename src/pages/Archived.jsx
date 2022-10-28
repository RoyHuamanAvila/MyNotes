import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CardNote from "../components/CardNote";

const Archived = () => {
    const notes = useSelector(state => state.notes);

    return(
        <div id="archived">
            <h1>Archived notes</h1>
            <Link to='/'>Go back to unarchived notes</Link>
            <div className="notes-list">
                {
                    notes.filter(note => note.archived)
                        .map(note=> <CardNote title={note.title} dateUpdated={note.dateUpdated}/>)
                }
            </div>
        </div>
    )
} 

export default Archived;
