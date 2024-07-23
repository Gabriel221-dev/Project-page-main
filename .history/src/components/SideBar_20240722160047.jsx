import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import "./Sidebar.css";
import { IconContext } from "react-icons";

const Sidebar = ({ isOpen, onToggle }) => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    onToggle();
  };

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <div className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
        <div className="sidebar__overlay" onClick={onToggle}>
          {" "}
          h
        </div>
        <div className="sidebar__content">
          <div className="sidebar__header">
            <button
              className="sidebar__close"
              title="Close Menu"
              onClick={onToggle}
            >
              <AiOutlineClose />
            </button>
          </div>

          <ul className="sidebar__navigation">
            <li className="sidebar__link">
              <button
                className="sidebar__anchor"
                onClick={() => handleNavigate("/")}
              >
                home
              </button>
            </li>
            <li className="sidebar__link">
              <button
                className="sidebar__anchor"
                onClick={() => handleNavigate("/about")}
              >
                about
              </button>
            </li>
          </ul>

          <button
            className="sidebar__btn"
            onClick={() => handleNavigate("/contact")}
          >
            contact us
          </button>
        </div>
      </div>
    </IconContext.Provider>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Sidebar;
