import { NavBar } from "./components/NavBar";
import { ResumeBuilder } from "./pages/ResumeBuilder";
import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import TemplatesPage from "./pages/TemplatesPage";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/resume">
                    <Route
                        index
                        element={<Navigate to="/resume/1" replace />}
                    />
                    <Route path=":id" element={<ResumeBuilder />} />
                </Route>
                <Route path="/templates" element={<TemplatesPage />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
