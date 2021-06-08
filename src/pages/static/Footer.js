import { useState, useEffect } from "react";
import ErrorAlert from "../../utilities/ErrorAlert";
import SuccessMessage from "../../utilities/SuccessMessage";
import { subscription } from "../../utilities/api";

function Footer() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    useEffect(() => {
        const resetMessage = setTimeout(() => clearMessage(), 5000);
        return () => clearTimeout(resetMessage);
    });

    function clearMessage() {
        setError(null);
        setSuccess(null);
    }

    function handleChange(e) {
        const value = e.target.value;
        setEmail(value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const abortController = new AbortController();
        try {
            const response = await subscription(email, abortController.signal);
            setEmail("");
            setSuccess(response);
            return response;
        } catch (error) {
            setError(error);
            console.error(error);
        }
    }

    return (
        <footer
            className="container-fluid bg-dark text-center text-light"
            style={{ height: "100vh" }}
        >
            <section className="d-flex m-4 gap-4 justify-content-center">
                <a
                    href="https://github.com/djdenney"
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className="bi bi-github fs-3 text-light"></div>
                </a>
                <a
                    href="https://linkedin.com/in/daniel-denney"
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className="bi bi-linkedin fs-3 text-light"></div>
                </a>

                <a
                    href="mailto:daniel@denneythe.dev"
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className="bi bi-google fs-3 text-light"></div>
                </a>
            </section>

            <section className="">
                <form
                    id="recaptcha-form"
                    className="row d-flex justify-content-center"
                    onSubmit={(e) => handleSubmit(e)}
                >
                    <div className="d-grid col-md-5 col-12 form-group mb-4 gap-4">
                        <ErrorAlert error={error} />
                        <SuccessMessage success={success} />
                        <label>volunteer for spam:</label>
                        <input
                            name="email"
                            id="email"
                            className="form-control"
                            type="email"
                            placeholder="email address"
                            value={email}
                            onChange={(e) => handleChange(e)}
                        />
                        <button
                            type="submit"
                            className="btn btn-outline-light mb-4 g-recaptcha"
                            data-sitekey="6LcG5xwbAAAAAG7lZj-4_o_45wAiyvd9hb7WIdjp"
                            data-callback="onSubmit"
                            data-action="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </section>

            <section className="d-flex justify-content-center">
                <p className="col col-md-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt distinctio earum repellat quaerat voluptatibus placeat
                    nam, commodi optio pariatur est quia magnam eum harum
                    corrupti dicta, aliquam sequi voluptate quas.
                </p>
            </section>
        </footer>
    );
}

export default Footer;
