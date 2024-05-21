import { useAuth } from "@/context/auth-provider";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";

const PrivateRouter = () => {
  const { isLogged } = useAuth();

  return isLogged ? (
    <>
      <Navigate to="/" />
      {toast.warn("Você já fez login")}
    </>
  ) : (
    <Outlet />
  );
};

export default PrivateRouter;
