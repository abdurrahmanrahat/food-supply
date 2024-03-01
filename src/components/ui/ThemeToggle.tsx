import { TThemeContextProps, ThemeContext } from "@/context/ThemeProvider";
import { useContext } from "react";
import Moon from "../svg/Moon";
import Sun from "../svg/Sun";

const ThemeToggle = () => {
  const { mood, toggle } = useContext(ThemeContext) as TThemeContextProps;

  return (
    <div onClick={toggle} className="cursor-pointer">
      {mood === "light" ? <Sun /> : <Moon />}
    </div>
  );
};

export default ThemeToggle;
