"use client";
import { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [complete, setComplete] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = () => {
    const validEmail = emailRegex.test(email);
    if (validEmail) {
      setComplete(true);
      setEmail("");
    } else setError(true);
  };

  return (
    <div className="subscribe-container" id="subscribe">
      <h3>SUBSCRIBE</h3>
      <p>Subscribe to get the latest tips and tricks of the industry sent straight to your crypt box every month</p>
      <div className="input-group">
        <input
          type="email"
          placeholder="Enter your email address"
          onChange={(e) => {
            if (error) setError(false);
            if (complete) setComplete(false);
            setEmail(e.target.value);
          }}
          value={email}
        />
        <button type="submit" disabled={!email} onClick={handleSubmit}>
        Subscribe Now
        </button>
        {error && <p>Invalid email</p>}
        {complete && (
          <p>Congratulations, your email has been sent to oblivion</p>
        )}
      </div>
    </div>
  );
};

export default Subscribe;
