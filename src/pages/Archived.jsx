import { Link } from "react-router-dom";

const Archived = () => {
    return(
        <div id="archived">
            <h1>Archived notes</h1>
            <Link to='/'>Go back to unarchived notes</Link>
        </div>
    )
} 

export default Archived;
