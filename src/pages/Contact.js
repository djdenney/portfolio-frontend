import { useState, useEffect } from "react";
import ErrorAlert from "../utilities/ErrorAlert";
import { message } from "../utilities/api";
import SuccessMessage from "../utilities/SuccessMessage";

function Contact() {
    const initialFormData = {
        name: "",
        email: "",
        message: "",
    };

    const [formData, setFormData] = useState(initialFormData);
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
        setFormData({
            ...formData,
            [e.target.name]: value,
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const abortController = new AbortController();
        try {
            const response = await message(formData, abortController.signal);
            setFormData(initialFormData);
            setSuccess(response);
            return response;
        } catch (error) {
            setError(error);
            console.error(error);
        }
    }

    return (
        <div className="container-fluid col-md-8" style={{ marginTop: "56px" }}>
            <ErrorAlert error={error} />
            <SuccessMessage success={success} />
            <form
                id="recaptcha-form"
                className="d-grid gap-4"
                onSubmit={(e) => handleSubmit(e)}
            >
                <div className="form-group">
                    <label className="form-label">name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">message</label>
                    <textarea
                        type="text"
                        className="form-control"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <button 
                    className="btn btn-primary g-recaptcha" 
                    type="submit"
                    data-sitekey='6LcG5xwbAAAAAG7lZj-4_o_45wAiyvd9hb7WIdjp'
                    data-callback='onSubmit'
                    data-action='submit'
                >
                    Send
                </button>
            </form>
        </div>
    );
}

export default Contact;
