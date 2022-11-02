import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NoteList from "../components/NoteList";

const Archived = () => {
    const notes = useSelector(state => state.notes);

    return (
        <div id="archived">
            <header className="header-page">
                <h1>Archived notes</h1>
                <Link to='/'> &lt; Go back to unarchived notes</Link>
            </header>
            <NoteList inArchive={true} />
        </div>
    )
}

export default Archived;
