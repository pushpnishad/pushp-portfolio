function Skills() {

    const skills = [
        {
            name: "Java",
            level: 85
        },
        {
            name: "Spring Boot",
            level: 80
        },
        {
            name: "React.js",
            level: 75
        },
        {
            name: "JavaScript",
            level: 80
        },
        {
            name: "HTML / CSS",
            level: 90
        },
        {
            name: "SQL",
            level: 80
        },
        {
            name: "Microservices",
            level: 75
        },
        {
            name: "PostgreSQL",
            level: 75
        },
        {
            name: "RabbitMQ",
            level: 65
        },
        {
            name: "Docker",
            level: 65
        },
        {
            name: "Git / GitHub",
            level: 80
        },
        {
            name: "Bootstrap",
            level: 80
        }
    ];

    return (
        <section id="skills" className="section">

           <h2 className="section-title">
    Technical Skills
</h2>

<p className="skills-subtitle">
    Technologies and tools I use to build web applications
</p>

            <div className="skills-container">

                {skills.map((skill, index) => (

                    <div
                        className="skill-card"
                        key={index}
                    >

                        <div className="skill-header">

                            <span>
                                {skill.name}
                            </span>

                            <span>
                                {skill.level}%
                            </span>

                        </div>


                        <div className="progress-bar">

                            <div
                                className="progress"
                                style={{
                                    width: `${skill.level}%`
                                }}
                            >
                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Skills;