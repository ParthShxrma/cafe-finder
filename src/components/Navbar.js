import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FaMoon,
  FaSun,
  FaUserCircle,
  FaHome,
  FaSearch,
  FaStar,
} from "react-icons/fa";
import "./Navbar.css";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Initialize darkMode from body class
    const isDark = document.body.classList.contains("dark-mode");
    setDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    const current = document.documentElement.getAttribute("data-theme");
    const newTheme = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    setDarkMode(newTheme === "dark");
  };

  const links = [
    { path: "/", label: "Home", icon: <FaHome /> },
    { path: "/cafe-search", label: "Cafe Search", icon: <FaSearch /> },
    { path: "/favourites", label: "Favourites", icon: <FaStar /> },
  ];

  const activeIndex = links.findIndex((link) => link.path === location.pathname);

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-logo" onClick={() => (window.location.href = "/")}>
          <img src={logo} alt="Cafe Central Logo" className="logo-img" />
          <span className="logo-cafe">Cafe</span>
          <span className="logo-central">Central</span>
        </div>

        <ul className="navbar-links">
          {links.map((link) => (
            <li key={link.path}>
              <NavLink to={link.path} className={({ isActive }) => (isActive ? "active" : "")}>
                {link.icon}
                <span>{link.label}</span>
              </NavLink>
            </li>
          ))}

          {activeIndex !== -1 && (
            <div className="slider" style={{ left: `${activeIndex * 120}px` }}></div>
          )}
        </ul>

        <div className="navbar-right">
          <button className="toggle-btn" onClick={toggleDarkMode}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <div className="user-menu">
            <FaUserCircle
              className="user-icon"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <div className="dropdown">
                <NavLink to="/profile">My Profile</NavLink>
                <NavLink to="/logout">Logout</NavLink>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;