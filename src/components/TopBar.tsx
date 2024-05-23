import { useEffect, useState } from "react";
import SunSVG from "../icons/SunSVG";
import MoonSVG from "../icons/MoonSVG";

const TopBar = () => {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  useEffect(() => {
    chrome.storage.local.get("data-theme", (storage) => {
      const previousTheme = storage["data-theme"] || "light";
      if (previousTheme === "light") {
        setDarkTheme(false);
      } else {
        setDarkTheme(true);
      }
      document.querySelector("html")?.setAttribute("data-theme", previousTheme);
    });
  }, []);

  const onThemeChange = () => {
    const newTheme = darkTheme ? "light" : "dark";
    setDarkTheme(!darkTheme);
    document.querySelector("html")?.setAttribute("data-theme", newTheme);
    chrome.storage.local.set({ "data-theme": JSON.stringify(newTheme) });
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
