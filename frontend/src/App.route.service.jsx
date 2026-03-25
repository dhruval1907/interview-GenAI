import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./auth/pages/Login";
import Register from "./auth/pages/Register";


function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>this is home page </h1>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter