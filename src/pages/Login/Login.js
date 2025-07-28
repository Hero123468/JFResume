import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    // New state to control what's displayed after submission
    const [submissionMessage, setSubmissionMessage] = useState(null);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate a login process (e.g., sending to backend)
        console.log('Login data submitted:', formData);
        // Set the message to display "Login successful!"
        setSubmissionMessage("Login successful!");
        // Optionally, clear form or redirect after a short delay
        // setTimeout(() => {
        //   setFormData({ email: '', password: '' });
        //   setSubmissionMessage(null); // Clear message
        // }, 2000); // Clear after 2 seconds
    };
    return (_jsx("div", { children: submissionMessage ? (_jsx("h2", { children: submissionMessage })) : (_jsxs("form", { onSubmit: handleSubmit, children: [_jsx("input", { type: "email", id: "email", name: "email", value: formData.email, onChange: handleChange, placeholder: "Email" // Added placeholders for better UX
                 }), _jsx("br", {}), _jsx("input", { type: "password", id: "password", name: "password", value: formData.password, onChange: handleChange, placeholder: "Password" // Added placeholders for better UX
                 }), _jsx("br", {}), _jsx("input", { type: "submit", value: "Login" }), " "] })) }));
};
export default Login;
