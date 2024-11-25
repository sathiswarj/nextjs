"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation'
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("userlist")) || [];
    const findUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (findUser) {
      setMessage("Logged in successfully!");
      console.log("Logged in successfully!");
     router.push("/view") 
    } else {
      setMessage("Invalid email or password.");
      console.log("Login failed!");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <>
      {message && (
        <p
          style={{
            color: message === "Logged in successfully!" ? "green" : "red",
            marginBottom: "15px",
          }}
        >
          {message}
        </p>
      )}
      <div
        className="form-container"
        style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}
      >
        <div
          className="form-section"
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
              required
            />
            <button
              type="submit"
              style={{
                padding: "10px 15px",
                backgroundColor: "#007BFF",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </form>
          <p>
            Don't have an account? <Link href="register">Register</Link>
          </p>
        </div>
      </div>
    </>
  );
}
