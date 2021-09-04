import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

import Hero from "../components/Hero";
import Header from "../components/Header";
import Works from "../components/Works";
import Footer from "../components/Footer";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Home() {
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
                    Hi,
                </h6>
                <h1 ref={(el) => (titleAnim = el)} className="big-title">
                    My name is Daniel and I write software.
                </h1>
            </Hero>
            <Works />
            <Footer />
        </div>
    );
}

export default Home;
