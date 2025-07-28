import { NavBar } from "./components/NavBar";
import { ResumeBuilder } from "./pages/ResumeBuilder";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/resume">
                    <Route path=":id" element={<ResumeBuilder />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
