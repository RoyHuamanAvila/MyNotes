import './App.css';
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Archived from "./pages/Archived";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/archived-notes" element={<Archived />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
