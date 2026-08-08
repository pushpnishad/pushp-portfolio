function Home() {
    return (
        <section id="home" className="home">

            <div className="home-content">

                <p className="welcome">
                    Hello, I'm
                </p>

                <h1>
                    Pushp Nishad
                </h1>

                <h2>
                    Java Full Stack Developer
                </h2>

                <p>
                    I build scalable and user-friendly web applications
                    using Java, Spring Boot, React.js and Microservices.
                </p>

                <div className="home-buttons">

                    <a href="#projects" className="btn">
                        View Projects
                    </a>

                    <a href="#contact" className="btn">
                        Contact Me
                    </a>

                    <a
                        href="/Pushp_Nishad_CV.pdf"
                        target="_blank"
                        className="btn resume-btn"
                    >
                        Download CV
                    </a>

                    <a
    href="https://www.linkedin.com/in/pushp-nishad-818059220"
    target="_blank"
    rel="noopener noreferrer"
    className="btn linkedin-btn"
>
    LinkedIn
</a>

<a
    href="https://github.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="btn github-btn"
>
    GitHub
</a>

                </div>

            </div>


           <div className="home-image">
    <img
        src={`${import.meta.env.BASE_URL}images/profile.png`}
        alt="Pushp Nishad"
    />
</div>

        </section>
    );
}

export default Home;