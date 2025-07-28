import { NavBar } from "./components/NavBar";
import { ResumeBuilder } from "./pages/ResumeBuilder";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import TemplatesPage from "./pages/TemplatesPage";

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/resume">
                    <Route path=":id" element={<ResumeBuilder />} />
                </Route>
                <Route path="/templates" element={<TemplatesPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
