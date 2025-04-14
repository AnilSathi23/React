import React, { useState } from 'react';

function BasicFormHandling() {
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState({
        name: false,
        email: false,
        message: false,
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
        setErrors({ ...errors, [name]: false });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Initialize form validity and errorsCopy
        let formValid = true;
        const errorsCopy = { ...errors };

        // Check if any input fields are empty
        for (const field in formValues) {
            if (!formValues[field]) {
                formValid = false;
                errorsCopy[field] = true;
            }
        }

        // Update errors state
        setErrors(errorsCopy);

        // Submit the form if valid
        if (formValid) {
            console.log("Form submitted with values: ", formValues);
            // Add code to send form data to server or perform the desired action
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                />
                {errors.name && <div className="error">Please enter your name</div>}
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                />
                {errors.email && <div className="error">Please enter a valid email
                    address</div>}
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formValues.message}

                    onChange={handleChange}
                />
                {errors.message && <div className="error">Please enter a message</div>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default BasicFormHandling;