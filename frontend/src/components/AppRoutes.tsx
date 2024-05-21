import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Header from "./header";
import Register from "./pages/register";
import Login from "./pages/login";
import PrivateRouter from "./private-route";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />

        <Route path="/register" element={<PrivateRouter />}>
          <Route path="/register" element={<Register />} />
        </Route>

        <Route path="/login" element={<PrivateRouter />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route path="/course" element={<h1>Cursos</h1>} />
      </Routes>
      {/* FOOTER */}
    </BrowserRouter>
  );
};

export default AppRoutes;
