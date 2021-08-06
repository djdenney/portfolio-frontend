import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    const date = new Date().getFullYear();

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
        }
    ];

    return (
        <footer id="footerSection">
            <div className="container-fluid-small">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-9 footer-title anim-bot">
                        <h2 className="big-title">Help Me do what I Love for a Living.</h2>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-3 footer-project anim-bot">
                        <Link to="/contact">Hire Me</Link>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-11 col-xl-4 copyright">
                        <div className="footer-menu">
                            <ul>
                                {socialLinks.map((item, i) => (
                                    <li key={i}>
                                        <a href={item.url}>{item.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-1 footer-offset"></div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
