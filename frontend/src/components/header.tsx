import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import LOGO from "../assets/logo.png";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useState } from "react";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

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
        <SheetContent className="grid place-content-center">
          <div className="flex flex-col gap-6">
            <Link
              to="/"
              className="text-2xl transition-all text-center p-2 rounded-lg hover:bg-primary hover:text-white"
              onClick={() => setMenuVisible(false)}
            >
              Home
            </Link>
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
            <Link
              to="/course"
              className="text-2xl transition-all text-center p-2 rounded-lg hover:bg-primary hover:text-white"
              onClick={() => setMenuVisible(false)}
            >
              Curso
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
