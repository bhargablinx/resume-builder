import { NavBar } from "./components/NavBar";
import { ResumeBuilder } from "./pages/ResumeBuilder";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/resume" element={<ResumeBuilder />} />
            </Routes>
        </>
    );
}

export default App;
