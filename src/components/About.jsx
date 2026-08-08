function About() {
    return (
        <section id="about" className="about-section">

            <h2 className="section-title">
                About Me
            </h2>

            <div className="about-container">

                {/* About Text */}
                <div className="about-text">

                    <h3>
                        Java Full Stack Developer
                    </h3>

                    <p>
                        I am a motivated and detail-oriented Java Full Stack
                        Developer with a strong foundation in Java,
                        Spring Boot, React.js, SQL and Microservices.
                    </p>

                    <p>
                        I enjoy building real-world applications,
                        solving programming problems and learning
                        modern technologies.
                    </p>

                    <p>
                        My recent project focuses on an Event-Driven
                        E-Commerce System using Spring Boot,
                        RabbitMQ, Docker, PostgreSQL and React.js.
                    </p>

                    <a href="#contact" className="btn">
                        Contact Me
                    </a>

                </div>


                {/* Highlight Cards */}
                <div className="about-highlights">

                    <div className="highlight-card">
                        <h3>Java</h3>
                        <p>Backend Development</p>
                    </div>

                    <div className="highlight-card">
                        <h3>React</h3>
                        <p>Frontend Development</p>
                    </div>

                    <div className="highlight-card">
                        <h3>Microservices</h3>
                        <p>Distributed Applications</p>
                    </div>

                    <div className="highlight-card">
                        <h3>Docker</h3>
                        <p>Containerization</p>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;