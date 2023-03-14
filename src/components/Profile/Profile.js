import React from "react";

export const Status = ({ status = "Offline" }) => {
  return (
    <div className="status-container">
      <span className={`status ${status === "Offline" ? "offline" : "online"}`}>
        {status}
      </span>
    </div>
  );
};

export default function Profile({ username, status }) {
  return (
    <div className="Profile">
      <h1 className="username">@{username}</h1>
      <Status status={status} />
    </div>
  );
}
