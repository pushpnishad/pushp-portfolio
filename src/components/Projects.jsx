function Projects() {

    const projects = [
        {
            title: "Event-Driven E-Commerce Microservices",
            description:
                "A scalable e-commerce backend developed using microservices architecture with a React Admin Dashboard.",

            technologies: [
                "Java 21",
                "Spring Boot",
                "React.js",
                "PostgreSQL",
                "RabbitMQ",
                "JWT",
                "Docker"
            ],

            features: [
                "Authentication Service",
                "Product Service",
                "Inventory Service",
                "Order Service",
                "Payment Service",
                "Notification Service",
                "Admin Dashboard"
            ],

            github: "https://github.com/",
            demo: "#"
        },

        {
            title: "Dynamic Web Application",
            description:
                "A dynamic web application developed during professional experience using PHP, MySQL, HTML, CSS and JavaScript.",

            technologies: [
                "PHP",
                "MySQL",
                "HTML",
                "CSS",
                "JavaScript"
            ],

            features: [
                "Dynamic web pages",
                "Server-side logic",
                "MySQL database integration",
                "Frontend integration"
            ],

            github: "https://github.com/",
            demo: "#"
        },

        {
            title: "React CRUD Application",
            description:
                "A CRUD application demonstrating frontend development with React.js and database-backed backend APIs.",

            technologies: [
                "React.js",
                "JavaScript",
                "REST API",
                "MongoDB",
                "CSS"
            ],

            features: [
                "Create records",
                "Display records",
                "Update records",
                "Delete records",
                "Search and manage data"
            ],

            github: "https://github.com/",
            demo: "#"
        }
    ];

    return (
        <section id="projects" className="section">

            <h2 className="section-title">
                My Projects
            </h2>

            <div className="projects-container">

                {projects.map((project, index) => (

                    <div className="project-card" key={index}>

                        <div className="project-number">
                            0{index + 1}
                        </div>

                        <h3>
                            {project.title}
                        </h3>

                        <p className="project-description">
                            {project.description}
                        </p>


                        <h4>
                            Technologies
                        </h4>

                        <div className="project-tech">

                            {project.technologies.map(
                                (technology, techIndex) => (

                                    <span key={techIndex}>
                                        {technology}
                                    </span>

                                )
                            )}

                        </div>


                        <h4>
                            Key Features
                        </h4>

                        <ul>

                            {project.features.map(
                                (feature, featureIndex) => (

                                    <li key={featureIndex}>
                                        {feature}
                                    </li>

                                )
                            )}

                        </ul>


                        <div className="project-buttons">

                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-btn"
                            >
                                GitHub
                            </a>

                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-btn demo-btn"
                            >
                                Live Demo
                            </a>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Projects;