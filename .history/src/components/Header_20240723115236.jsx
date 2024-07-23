import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";
import "./Header.css";
import { IconContext } from "react-icons";

const Header = () => {
  const [isSidebarToggled, setSidebarToggled] = useState(false);

  const handleToggle = () => {
    setSidebarToggled((prev) => !prev);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <header className="header">
          <nav className="header__nav">
            <NavLink className="header__brand" to="/">
              <img
                className="header__logo"
                src="/Imagez/logo.svg"
                alt="Logo"
                loading="eager"
                width="160"
              />
            </NavLink>

            <ul className="header__navigation">
              <li className="header__link">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "header__anchor header__anchor--active"
                      : "header__anchor"
                  }
                  to="/"
                >
                  home
                </NavLink>
              </li>
              <li className="header__link">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "header__anchor header__anchor--active"
                      : "header__anchor"
                  }
                  to="/about"
                >
                  about
                </NavLink>
              </li>

              <NavLink className="header__btn" to="/contact">
                contact us
              </NavLink>
            </ul>

            <button
              className="header__menu"
              title="Toggle Menu"
              onClick={handleToggle}
            >
              <FaBars />
            </button>
          </nav>
          <Sidebar isOpen={isSidebarToggled} onToggle={handleToggle} />
        </header>
      </IconContext.Provider>
    </>
  );
};

export default Header;
