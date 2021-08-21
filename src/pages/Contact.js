import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

import Hero from "../components/Hero";
import Header from "../components/Header";
import ContactBody from "../components/ContactBody";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Contact() {
    let titleAnim = useRef(null);
    let subtitleAnim = useRef(null);
    let tl = gsap.timeline();
    const LoadingTransition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };

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
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                exit={{ x: 0 }}
                transition={LoadingTransition}
                className="page-trans"
            ></motion.div>
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
