import React, { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { gsap } from "gsap";

import Hero from "../components/Hero";
import Header from "../components/Header";
import WorkDescription from "../components/WorkDescription";
import WorkGallery from "../components/WorkGallery";
import WorkNext from "../components/WorkNext";
import WorkLinks from "../components/WorkLinks";

import Works from "../data/Works";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function SingleWork() {
    let titleAnim = useRef(null);
    let subtitleAnim = useRef(null);
    let tl = gsap.timeline();

    useEffect(() => {
        tl.from(".single-project-hero", {
            opacity: 0,
            delay: 1,
            duration: 1,
            ease: "power3.inOut",
        })
            .from(subtitleAnim, {
                y: 15,
                opacity: 0,
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

    const { workId } = useParams();
    const thisWork = Works.find((element) => element.id == workId);

    return (
        <div>
            <Header />
            <Hero
                background={thisWork.background}
                class="single-project-hero"
                tint="dark-bg"
            >
                <h6 ref={(el) => (subtitleAnim = el)} className="sub-title">
                    {thisWork.fixedCategory}
                </h6>
                <h1 ref={(el) => (titleAnim = el)} className="big-title">
                    {thisWork.name}
                </h1>
            </Hero>
            <WorkDescription>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-5">
                    <h2 className="big-title anim-bot">{thisWork.headline}</h2>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-1"></div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 anim-right">
                    <div className="project-desc">
                        {thisWork.text.map((elem, i) => (
                            <p key={i}>{elem}</p>
                        ))}
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-3 desc-bottom desc-bottom-after-2 anim-bot">
                    <Link to="/contact">Hire Me</Link>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-3 desc-bottom desc-bottom-after-1 anim-bot">
                    <p className="fade-p">{thisWork.date}</p>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-3 desc-bottom desc-bottom-before-1 anim-right">
                    <ul>
                        {thisWork.technology.map((elem, i) => (
                            <li key={i}>{elem}</li>
                        ))}
                    </ul>
                </div>
                <WorkLinks
                    from={"SingleWork"}
                    repository={thisWork.repository}
                    deployment={thisWork.deployment}
                />
            </WorkDescription>
            <WorkGallery
                imagesLeft={thisWork.imagesLeft}
                imagesRight={thisWork.imagesRight}
            />
            <WorkNext
                link={
                    thisWork.id < Works.length ? thisWork.id + 1 : thisWork.id
                }
                noMore={thisWork.id === Works.length && "done"}
            />
        </div>
    );
}

export default SingleWork;
