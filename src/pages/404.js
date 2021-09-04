import React from "react";

import Header from "../components/Header";
import Block404 from "../components/404";
import Footer from "../components/Footer";

function Page404() {
    return (
        <div className="redirect">
            <Header />
            <Block404 />
            <Footer />
        </div>
    );
}

export default Page404;
