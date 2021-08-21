import React from "react";
import { Link } from "react-router-dom";

function AboutText() {
    return (
        <section id="aboutStory" className="section">
            <div className="container-fluid-small">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 story-left anim-bot">
                        <h2 className="big-title anim-bot">
                            How Did I End Up Here?
                        </h2>
                        <Link to="/">View Projects</Link>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 story-right anim-right">
                        <div className="story">
                            <p className="big-p">
                                Since graduating highschool I've been working in
                                customer service and support roles, but I never
                                really liked it and I was always the person
                                annoying the boss with my latest ideas on how to
                                solve problems that nobody was asking me to
                                solve. When the Covid-19 pandemic began, I took
                                up a hobby of writing scripts for video games in
                                LUA. After doing this for a while I realized I
                                didn't really care about the games themselves,
                                but the process of putting my ideas into action
                                programatically. After spending probably too
                                much time doing that, my spouse;{" "}
                                <a href="http://www.rebekahdenney.com">
                                    The Beautiful and Talented Rebekah Denney
                                </a>
                                , suggested that if I like coding so much I
                                should try to do it for a living. So in December
                                of 2020 I enrolled in Thinkful.com's "Software
                                Engineering" curriculum and graduated in May of
                                2021. And now I know how to do some stuff.{" "}
                            </p>
                        </div>
                    </div>

                    <div className="col-xl-3"></div>

                    <div className="col-xl-3"></div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 story-bottom anim-bot">
                        <ul>
                            <li>React Front End Development and Design</li>
                            <li>
                                Express Server Integration and Administration
                            </li>
                            <li>Node.js and Everything it Does*</li>
                        </ul>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 story-bottom anim-bot">
                        <ul>
                            <li>RESTful API Implementation with JSON</li>
                            <li>PostgreSQL Database Administration</li>
                            <li>Mocha, Chai, E2E, and Jest Unit Testing</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutText;
