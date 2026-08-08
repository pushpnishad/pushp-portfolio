import { useState } from "react";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="navbar">

            {/* Logo */}

            <div className="logo">
                Pushp Nishad
            </div>


            {/* Desktop Menu */}

            <div className={`nav-links ${menuOpen ? "active" : ""}`}>

                <a href="#home" onClick={closeMenu}>
                    Home
                </a>

                <a href="#about" onClick={closeMenu}>
                    About
                </a>

                <a href="#skills" onClick={closeMenu}>
                    Skills
                </a>

                <a href="#projects" onClick={closeMenu}>
                    Projects
                </a>

                <a href="#experience" onClick={closeMenu}>
                    Experience
                </a>

                <a href="#education" onClick={closeMenu}>
                    Education
                </a>

                <a href="#contact" onClick={closeMenu}>
                    Contact
                </a>

            </div>


            {/* Hamburger Button */}

            <button
                className="menu-button"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </button>

        </nav>
    );
}

export default Navbar;