import React, { useState } from "react";
import { FaMoon, FaSun, FaUserCircle } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle("dark-mode");
    };

    return(
        <nav className="navbar">
            <div className="navbar-logo" onClick={() => window.location.href = "/"}>
                <span className="logo-cafe">Cafe</span> <span className="logo-central">Central</span>
            </div>
            
            <ul className="navbar0links">
            <li><a href="/">Home</a></li>
            <li><a href="/cafe-search">Cafe Search</a></li>
            <li><a href="/favourites">Favourites</a></li>
            </ul>

            <div className="navbar-right">
            <button className="toggle-btn" onClick={toggleDarkMode}>
                {darkMode ? <FaSun /> : <FaMoon />}
                </button>
                <div className="user-menu">
                    <FaUserCircle className="user-icon" onClick={() => setDropdownOpen(!dropdownOpen)} />
                        {dropdownOpen && (
                            <div className="dropdown">
                                <a href="/profile">My Profile</a>
                                <a href="/logout">Logout</a>
                            </div>
                        )}
                    </div>    
            </div> 
        </nav>
    );
};
export default Navbar;