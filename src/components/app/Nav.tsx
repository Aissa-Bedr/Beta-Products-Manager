import React, { useEffect, useState } from "react";
import Flex from "../build/Flex";
import { BsSun, BsMoon } from "react-icons/bs";
import Footer from "./Footer";

type Theme = "light" | "dark";

const Nav = () => {
  const [theme, setTheme] = useState<Theme>(
    JSON.parse(`${localStorage.getItem("theme")}`) || "light"
  );

  function checkTheme(): void {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      document.body.classList.remove("bg-dark-1");
      document.body.classList.add("bg-secondary");
    }

    if (theme === "dark") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      document.body.classList.remove("bg-secondary");
      document.body.classList.add("bg-dark-1");
    }
  }

  useEffect(() => {
    checkTheme();
  }, []);

  useEffect(() => {
    checkTheme();
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <Flex className="w-full items-center justify-between">
      <p className="uppercase font-semibold dark:text-white">
        Products manager
      </p>
      <Footer />
      <>
        <Flex
          className="items-center relative w-20 h-8 bg-white rounded-full cursor-pointer"
          onClick={() =>
            setTheme((prevState) => (prevState === "dark" ? "light" : "dark"))
          }
        >
          <Flex
            className={`items-center justify-center absolute ${
              theme === "dark"
                ? "right-0.5 bg-purple-300"
                : "left-0.5 bg-blue-300"
            } w-6 h-6 rounded-full text-white`}
          >
            {theme === "dark" ? <BsMoon /> : <BsSun />}
          </Flex>
        </Flex>
      </>
    </Flex>
  );
};

export default Nav;
