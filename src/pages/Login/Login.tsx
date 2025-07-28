import { useState } from "react";

interface SignupFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<SignupFormData>({
    email: '',
    password: '',
  });

  // New state to control what's displayed after submission
  const [submissionMessage, setSubmissionMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
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

  return (
    <div>
      {/* Conditionally render the form or the message */}
      {submissionMessage ? (
        <h2>{submissionMessage}</h2>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email" // Added placeholders for better UX
          />
          <br />
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password" // Added placeholders for better UX
          />
          <br />
          <input type="submit" value="Login" /> {/* Changed button text */}
        </form>
      )}
    </div>
  );
}

export default Login;