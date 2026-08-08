import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
    return (
        <>
            <Navbar />

            <Home />

            <About />

            <Skills />

            <Projects />

            <Experience />

            <Education />

            <Contact />

            <footer>

    <div className="footer-content">

        <h3>
            Pushp Nishad
        </h3>

        <p>
            Java Full Stack Developer
        </p>

        <div className="footer-links">

            <a href="#home">
                Home
            </a>

            <a href="#about">
                About
            </a>

            <a href="#projects">
                Projects
            </a>

            <a href="#contact">
                Contact
            </a>

        </div>

        <p className="copyright">
            © 2026 Pushp Nishad. All Rights Reserved.
        </p>

    </div>

</footer>
        </>
    );
}

export default App;