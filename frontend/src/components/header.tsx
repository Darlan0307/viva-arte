import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="grid grid-cols-2 items-center py-5 px-5 mb-6 sm:grid-cols-3 md:px-10 lg:px-16">
      <Link to="/" className="sm:justify-self-center sm:col-start-2">
        <h1>Logo</h1>
      </Link>

      <Button
        className="justify-self-end sm:col-start-3"
        variant="ghost"
        size="icon"
      >
        <Menu size={40} />
      </Button>
    </header>
  );
};

export default Header;
