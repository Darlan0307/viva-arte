import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Header from "./header";
import Register from "./pages/register";
import Login from "./pages/login";
import PrivateRouter from "./private-route";
import Course from "./pages/course";
import Footer from "./footer";

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

        <Route path="/course" element={<Course />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
