"use client";
import { useState, useEffect } from "react";

export default function Page() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const userList = JSON.parse(localStorage.getItem("userlist")) || [];
    setUser(userList);
  }, []);

  const tableStyles = {
    width: "80%",
    margin: "20px auto",
    borderCollapse: "collapse",
  };

  const thStyles = {
    backgroundColor: "#007BFF",
    color: "#fff",
    padding: "10px",
    border: "1px solid #ddd",
  };

  const tdStyles = {
    padding: "10px",
    textAlign: "center",
    border: "1px solid #ddd",
  };

  const containerStyles = {
    textAlign: "center",
    fontFamily: "'Arial', sans-serif",
    marginTop: "30px",
  };

  const noResultsStyles = {
    color: "red",
    fontWeight: "bold",
    fontSize: "18px",
  };

  return (
    <>
      {user.length > 0 ? (
        <div className="list-container" style={containerStyles}>
          <div className="list-section">
            <table style={tableStyles}>
              <thead>
                <tr>
                  <th style={thStyles}>Id</th>
                  <th style={thStyles}>Name</th>
                  <th style={thStyles}>Email</th>
                </tr>
              </thead>
              <tbody>
                {user.map((userItem, index) => (
                  <tr key={index}>
                    <td style={tdStyles}>{userItem.id}</td>
                    <td style={tdStyles}>{userItem.name}</td>
                    <td style={tdStyles}>{userItem.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div style={{ ...containerStyles, ...noResultsStyles }}>0 results</div>
      )}
    </>
  );
}
