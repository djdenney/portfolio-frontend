import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

import Hero from "../components/Hero";
import Header from "../components/Header";
import AboutText from "../components/AboutText";
import Services from "../components/Services";
import Footer from "../components/Footer";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function About() {
    let titleAnim = useRef(null);
    let subtitleAnim = useRef(null);
    let tl = gsap.timeline();

    useEffect(() => {
        tl.from(subtitleAnim, {
            y: 15,
            opacity: 0,
            delay: 1,
            duration: 0.5,
            ease: "power3.inOut",
        })
            .from(titleAnim, {
                y: 15,
                opacity: 0,
                duration: 0.5,
                ease: "power3.inOut",
            })
            .from(".scroll-down", {
                y: 15,
                opacity: 0,
                duration: 0.5,
                ease: "power3.inOut",
            });
    }, [tl, titleAnim, subtitleAnim]);

    return (
        <div>
            <Header />
            <Hero>
                <h6 ref={(el) => (subtitleAnim = el)} className="sub-title">
                    I feel like calling myself a "sofware engineer" is sort of a
                    disservice to the word "engineer"
                </h6>
                <h1 ref={(el) => (titleAnim = el)} className="big-title">
                    Daniel Denney. <br /> Aging Milennial... Software Person.
                </h1>
            </Hero>
            <AboutText />
            <Services>
                <h2 className="big-title">So I'm Looking for a Job.</h2>
                <p>
                    I am proficient in modern full stack development with
                    ReactJS, Express, Node, and PostgreSQL, and I am always
                    learning more.
                </p>
                <Link to="/contact">Hire Me</Link>
            </Services>
            <Footer />
        </div>
    );
}

export default About;
