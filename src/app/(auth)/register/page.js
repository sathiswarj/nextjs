"use client";

import { useState } from "react";
import Link from "next/link";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      id: Date.now(),
      name,
      email,
      password,
    };

    const existingUsers = JSON.parse(localStorage.getItem("userlist")) || [];

    const isExistingUser = existingUsers.some((user) => user.email === email);
    if (isExistingUser) {
      setMessage("This email is already registered.");
      return;
    }

    existingUsers.push(userData);
    localStorage.setItem("userlist", JSON.stringify(existingUsers));

    setMessage("User added successfully!");
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      {message && <p style={{ color: "blue", marginBottom: "15px" }}>{message}</p>}
      <div className="form-container" style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
        <div className="form-section" style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "8px" }}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
            />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
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
            Already have an account? <Link href="/login">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
}
