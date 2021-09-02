import { useState, useEffect } from "react";

import { submitForm } from "../../api";

const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const abortController = new AbortController();
            setIsSubmitting(true);
            const response = await submitForm(
                { ...values },
                abortController.signal
            );
            return response;
        } catch (error) {
            setErrors(validate(values));
            console.error(error);
        }
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors]);

    return { handleChange, handleSubmit, values, errors };
};

export default useForm;
