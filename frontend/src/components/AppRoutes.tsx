import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      {/* HEADER */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/register" element={<h1>SignUp</h1>} />
        <Route path="/login" element={<h1>SignIn</h1>} />
        <Route path="/course" element={<h1>Cursos</h1>} />
      </Routes>
      {/* FOOTER */}
    </BrowserRouter>
  );
};

export default AppRoutes;
