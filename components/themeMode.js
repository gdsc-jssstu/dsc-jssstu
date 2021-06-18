import { useEffect, useState, useContext, useCallback } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const useDarkMode = () => {
  const [theme, setTheme] = useState("light");
  const themeContext = useContext(ThemeContext);

  const setMode = useCallback(
    (mode) => {
      localStorage.setItem("theme", mode);
      setTheme(mode);
      themeContext.setTheme(mode);
      if (mode === "dark") document.body.classList.add("dark");
      else if (mode === "light") document.body.classList.remove("dark");
    },
    [themeContext]
  );

  const toggleTheme = () => {
    if (theme === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches &&
    !localTheme
      ? setMode("dark")
      : localTheme
      ? setTheme(localTheme)
      : setMode("light");
  }, [setMode]);

  return [theme, toggleTheme];
};
