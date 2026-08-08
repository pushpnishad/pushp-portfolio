import { useState } from "react";

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (event) => {

        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };


    const handleSubmit = (event) => {

        event.preventDefault();

        const subject = `Portfolio Contact from ${formData.name}`;

        const body = `
Name: ${formData.name}

Email: ${formData.email}

Message:
${formData.message}
        `;

        window.location.href =
            `mailto:pushpnishad8601@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };


    return (
        <section id="contact" className="section">

            <h2 className="section-title">
                Contact Me
            </h2>

            <p className="contact-subtitle">
                Have a project or opportunity? Feel free to contact me.
            </p>


            <div className="contact-container">


                {/* Contact Information */}

                <div className="contact-details">

                    <h3>
                        Let's Work Together
                    </h3>

                    <p>
                        I am open to discussing software development
                        opportunities, projects and collaborations.
                    </p>


                    <div className="contact-item">

                        <span className="contact-icon">
                            📧
                        </span>

                        <div>
                            <h4>Email</h4>

                            <a href="mailto:pushpnishad8601@gmail.com">
                                pushpnishad8601@gmail.com
                            </a>
                        </div>

                    </div>


                    <div className="contact-item">

                        <span className="contact-icon">
                            📱
                        </span>

                        <div>
                            <h4>Phone</h4>

                            <p>
                                6263060718
                            </p>
                        </div>

                    </div>


                    <div className="contact-item">

                        <span className="contact-icon">
                            💼
                        </span>

                        <div>
                            <h4>LinkedIn</h4>

                            <a
                                href="https://www.linkedin.com/in/pushp-nishad-818059220"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn Profile
                            </a>
                        </div>

                    </div>

                </div>


                {/* Contact Form */}

                <form
                    className="contact-form"
                    onSubmit={handleSubmit}
                >

                    <div className="form-group">

                        <label>
                            Your Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                    </div>


                    <div className="form-group">

                        <label>
                            Your Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                    </div>


                    <div className="form-group">

                        <label>
                            Message
                        </label>

                        <textarea
                            name="message"
                            rows="6"
                            placeholder="Write your message..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />

                    </div>


                    <button
                        type="submit"
                        className="submit-btn"
                    >
                        Send Message
                    </button>

                </form>

            </div>

        </section>
    );
}

export default Contact;