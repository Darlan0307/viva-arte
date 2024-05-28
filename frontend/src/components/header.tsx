import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, LogOut } from "lucide-react";
import LOGO from "../assets/logo.png";
import { Sheet, SheetContent, SheetFooter } from "@/components/ui/sheet";
import { useState } from "react";
import { useAuth } from "@/context/auth-provider";
import { Separator } from "@/components/ui/separator";
import { toast } from "react-toastify";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const { isLogged, handleEmailUser } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    handleEmailUser("");
    setMenuVisible(false);
    navigate("/");
    toast.success("Deslogado com sucesso!");
  };

  return (
    <header className="grid grid-cols-2 items-center py-5 px-5 mb-6 sm:grid-cols-3 sm:py-2 md:px-10 lg:px-16  shadow-lg">
      <Link to="/" className="sm:justify-self-center sm:col-start-2">
        <img
          src={LOGO}
          alt="logo do site"
          className="w-full max-w-[160px] sm:max-w-[200px]"
        />
      </Link>

      <Button
        className="justify-self-end sm:col-start-3"
        variant="ghost"
        size="icon"
        onClick={() => setMenuVisible(true)}
      >
        <Menu size={40} />
      </Button>

      <Sheet open={menuVisible} onOpenChange={setMenuVisible}>
        <SheetContent className="flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col gap-6">
            <Link
              to="/"
              className="text-2xl transition-all text-center p-2 rounded-lg hover:bg-primary hover:text-white"
              onClick={() => setMenuVisible(false)}
            >
              Home
            </Link>
            {!isLogged && (
              <>
                <Link
                  to="/register"
                  className="text-2xl transition-all text-center p-2 rounded-lg hover:bg-primary hover:text-white "
                  onClick={() => setMenuVisible(false)}
                >
                  Cadastrar
                </Link>
                <Link
                  to="/login"
                  className="text-2xl transition-all text-center p-2 rounded-lg hover:bg-primary hover:text-white"
                  onClick={() => setMenuVisible(false)}
                >
                  Login
                </Link>
              </>
            )}
            <Link
              to="/course"
              className="text-2xl transition-all text-center p-2 rounded-lg hover:bg-primary hover:text-white"
              onClick={() => setMenuVisible(false)}
            >
              Curso
            </Link>
          </div>
          {isLogged && (
            <>
              <Separator className="my-5 bg-[#333]" />
              <SheetFooter>
                <Button
                  size="lg"
                  className="text-xl space-x-2"
                  onClick={handleLogout}
                >
                  <LogOut />
                  <span>Logout</span>
                </Button>
              </SheetFooter>
            </>
          )}
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
