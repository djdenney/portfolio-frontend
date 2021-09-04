import React from "react";

function WorkLinks(props) {
    if (props.deployment) {
        return (
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-3 desc-bottom desc-bottom-before-2 anim-right">
                <ul>
                    <li>
                        <a
                            href={props.repository}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Repository
                        </a>
                    </li>
                    <li>
                        <a
                            to={props.deployment}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Deployment
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
    return (
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-3 desc-bottom desc-bottom-before-2 anim-right">
            <ul>
                <li>
                    <a href={props.repository} target="_blank" rel="noreferrer">
                        Repository
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default WorkLinks;
