import AppRoutes from "./components/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/auth-provider";
import ScrollTop from "./components/scroll-top";

function App() {
  return (
    <AuthProvider>
      <>
        <ToastContainer autoClose={3000} position={"bottom-right"} />
        <ScrollTop />
        <AppRoutes />
      </>
    </AuthProvider>
  );
}

export default App;
