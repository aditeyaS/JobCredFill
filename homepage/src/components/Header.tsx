import { useEffect, useState } from "react";
import SunSVG from "../icons/SunSVG";
import MoonSVG from "../icons/MoonSVG";
import { Link } from "react-router-dom";

const Header = () => {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  useEffect(() => {
    const previousTheme = localStorage.getItem("data-theme") || "light";
    if (previousTheme === "light") {
      setDarkTheme(false);
    } else {
      setDarkTheme(true);
    }
    document.querySelector("html")?.setAttribute("data-theme", previousTheme);
  }, []);

  const onThemeChange = () => {
    const newTheme = darkTheme ? "light" : "dark";
    setDarkTheme(!darkTheme);
    document.querySelector("html")?.setAttribute("data-theme", newTheme);
    localStorage.setItem("data-theme", newTheme);
  };

  return (
    <div className="navbar bg-base-100 text-base-content px-5">
      <div className="navbar-start gap-2">
        <Link to="/" className="text-2xl text-accent font-bold">
          JobCredFill
        </Link>
      </div>
      <div className="navbar-end">
        <button className="btn-circle btn-sm p-1" onClick={onThemeChange}>
          {darkTheme ? <SunSVG /> : <MoonSVG />}
        </button>
      </div>
    </div>
  );
};

export default Header;
