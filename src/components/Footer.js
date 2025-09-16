import React from "react";
import "./Footer.css";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return(
        <footer className="footer">
            <p className="footer-brand">Cafe Central by Parth & Kunwarjot</p>
            <p>© Cafe Central 2025, All rights reserved</p>
            <button onClick={scrollToTop} className="back-to-top">Back To Top ↑</button>
        </footer>
    );
};
export default Footer;