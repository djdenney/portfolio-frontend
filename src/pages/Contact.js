import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import Hero from "../components/Hero";
import Header from "../components/Header";
import ContactBody from "../components/ContactBody";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Contact() {
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
                    Maybe if I didn't check my phone so often
                </h6>
                <h1 ref={(el) => (titleAnim = el)} className="big-title">
                    It would think I'm less desperate
                    <br />
                    and ring every now and then.
                </h1>
            </Hero>
            <ContactBody />
        </div>
    );
}

export default Contact;
