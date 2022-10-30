import { useState } from "react";
import { useSelector } from "react-redux";
import CardNote from "../components/CardNote";
import { Link } from "react-router-dom";

const Home = () => {
    const notes = useSelector(state => state.notes);

    return(
        <div id="home">
            <header>
                <h1>My Notes</h1>
                <button className="button-create">Create note</button>
                <Link to='/archived-notes'>Archived notes</Link>
            </header>
            <div className="notes-list">
                {
                    notes
                        .filter(note => !note.archived)
                        .map(note => <CardNote title={note.title} dateUpdated={note.dateUpdated}/>)
                }
            </div>
        </div>
    )
}

export default Home;
