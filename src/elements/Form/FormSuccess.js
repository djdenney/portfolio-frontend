import React from "react";
import Icofont from "react-icofont";

const FormSuccess = () => {
    return (
        <div className="succes-message">
            <Icofont icon="check-circled" />
            <h1 className="big-title">Success!</h1>
            <p className="sub-title">
                You completed the form correctly.
                <br />
                When I get around to it I'll get back to you.
                <br />
                Should be pretty quick.
            </p>
        </div>
    );
};

export default FormSuccess;
