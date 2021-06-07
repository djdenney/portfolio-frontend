import daniel from "../images/daniel.jpeg";

function About() {
    return (
            <div className="container-fluid row justify-content-center" style={{marginTop: '56px'}}>
                <div className="col-md-8 gap-5">
                    <div className="col-md-4 d-md-block d-none float-end mx-4">
                        <img
                            src={daniel}
                            className="rounded float-start w-100"
                            alt="daniel"
                            style={{ maxHeight: "100vh" }}
                        />
                    </div>
                    <h1 className='mx-2 mx-md-0'>aging millennial makes websites</h1>
                    <div className='mx-2 mx-md-0'>
                        ok, so somehow i've gotta explain who i am as a person
                        but my explanation needs to be different than my
                        linkedin profile's 'about' section and the professional
                        summary on my resumé. i can't exactly talk about how
                        good i am at coding, because i have 0 years of
                        experience and my portfolio is basically just a bunch of
                        school projects, so when i say i know what i'm doing it
                        probably doesn't mean much to you. i can confidently say
                        that i know javascript, react, express, postgresql, and
                        node. i can also confidently say that if you asked me to
                        write a quicksort algorithm i would probably end up with
                        some needlessly recursive stackoverflow frankenstein
                        solution and hope prettierjs could make it look
                        passable.
                    </div>
                </div>
            </div>
    );
}

export default About;
