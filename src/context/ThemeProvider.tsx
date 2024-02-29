import { ReactNode, createContext, useState } from "react";

export type TThemeContextProps = {
  mood: string;
  toggle: () => void;
};

export const ThemeContext = createContext<TThemeContextProps | undefined>(
  undefined
);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mood, setMood] = useState("light");

  const toggle = () => {
    setMood((prev) => (prev === "light" ? "dark" : "light"));
  };

  const values: TThemeContextProps = { mood, toggle };

  return (
    <ThemeContext.Provider value={values}>
      <div className={`theme ${mood}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
