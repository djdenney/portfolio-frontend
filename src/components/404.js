import React from "react";
import { useLocation } from "react-router-dom";

function Block404() {
    const location = useLocation();
    const path = location.pathname;

    return (
        <section id="heroSection" className="simple-hero section page-404">
            <div className="container-fluid-small">
                <div className="row">
                    <div className="col-12">
                        <h6 className="sub-title">{`${path} does not exist`}</h6>
                        <h1 className="big-title">404.</h1>
                        <a href="/">Home</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Block404;
