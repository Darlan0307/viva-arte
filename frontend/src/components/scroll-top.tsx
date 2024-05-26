import { useEffect, useState } from "react";
import { useWindowScroll } from "@uidotdev/usehooks";
import { Button } from "./ui/button";
import { FaArrowUp } from "react-icons/fa";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [{ y }, scrollTo] = useWindowScroll();

  useEffect(() => {
    if (y) {
      y > 300 ? setIsVisible(true) : setIsVisible(false);
    }
  }, [y]);

  return (
    isVisible && (
      <Button
        onClick={() => {
          setIsVisible(false);
          scrollTo({ left: 0, top: 0, behavior: "smooth" });
        }}
        size="icon"
        className="fixed animate-bounce text-[40px] sm:text-[50px] bottom-5 right-5 z-30 lg:bottom-10 lg:right-10 p-2 shadow-lg"
      >
        <FaArrowUp />
      </Button>
    )
  );
};

export default ScrollTop;
