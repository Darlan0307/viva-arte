import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Header from "./header";
import Register from "./pages/register";
import Login from "./pages/login";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/course" element={<h1>Cursos</h1>} />
      </Routes>
      {/* FOOTER */}
    </BrowserRouter>
  );
};

export default AppRoutes;
