import { useEffect, useState } from "react";
import SunSVG from "../icons/SunSVG";
import MoonSVG from "../icons/MoonSVG";
import store from "../const/store";

const TopBar = () => {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  useEffect(() => {
    const previousTheme = localStorage.getItem(store.THEME) || "light";
    if (previousTheme === "light") {
      setDarkTheme(false);
    } else {
      setDarkTheme(true);
    }
    document.querySelector("html")?.setAttribute(store.THEME, previousTheme);
  }, []);

  const onThemeChange = () => {
    const newTheme = darkTheme ? "light" : "dark";
    setDarkTheme(!darkTheme);
    document.querySelector("html")?.setAttribute(store.THEME, newTheme);
    localStorage.setItem(store.THEME, newTheme);
  };

  return (
    <div className="flex justify-between items-center mb-3">
      <h1 className="text-2xl text-accent font-bold">JobCredFill</h1>
      <button className="btn-circle btn-sm p-1" onClick={onThemeChange}>
        {darkTheme ? <SunSVG /> : <MoonSVG />}
      </button>
    </div>
  );
};

export default TopBar;
