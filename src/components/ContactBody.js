import React from "react";

import Form from "../elements/Form/Form";

function ContactBody() {
    const socialLinks = [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/daniel-denney",
            type: "link",
        },
        {
            name: "GitHub",
            url: "https://www.github.com/djdenney",
            type: "link",
        },
        {
            name: "Email Me",
            url: "mailto:daniel@denneythe.dev",
            type: "email",
        },
        {
            name: "Resume",
            url: "/images/Daniel-Denney-Resume.pdf",
            type: "download",
        },
    ];

    return (
        <section id="contactSection" className="section">
            <div className="container-fluid-small">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 contact-left">
                        <h2 className="big-title anim-bot">Talk to Me.</h2>
                        <div className="row">
                            <div className="col-12 col-sm-6 anim-bot">
                                <ul>
                                    <li>(602) 410-5360</li>
                                    <li>daniel@denneythe.dev</li>
                                </ul>
                            </div>

                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 copyright">
                                <div className="footer-menu">
                                    <ul>
                                        {socialLinks.map((item, i) => (
                                            <li key={i}>
                                                <a href={item.url}>
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 contact-right anim-right">
                        <Form />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactBody;
