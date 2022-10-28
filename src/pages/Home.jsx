import { useState } from "react";
import { useSelector } from "react-redux";

const Home = () => {
    const notes = useSelector(state => state.notes);

    return(
        <div id="home">
            <h1>My notes</h1>
            <div className="notes-list">
                {
                    notes.map(note => <h1>{note.title}</h1>)
                }
            </div>
        </div>
    )
}

export default Home;
