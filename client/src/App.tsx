import Project from "./pages/project";
import RootLayout from "./components/layouts/RootLayout";
import Dashboard from "./pages/dashboard";
import { Routes, Route } from "react-router-dom";
function App() {
    return (
        <Routes>
            <Route path="/" element={<RootLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="/projects/:id" element={<Project />}>
            </Route>
            </Route>
            
        </Routes>
    );
}

export default App;
