import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Profile, { Status } from "./Profile";

describe("Profile component", () => {
  it("renders the username", () => {
    const username = "johndoe";
    render(<Profile username={username} />);
    const usernameElement = screen.getByText(`@${username}`);
    expect(usernameElement).toBeInTheDocument();
  });

  it("renders the status", () => {
    const status = "Online";
    render(<Profile status={status} />);
    const statusElement = screen.getByText(status);
    expect(statusElement).toBeInTheDocument();
  });
});

describe("Status component", () => {
  it("renders the status as 'Offline' by default", () => {
    render(<Status />);
    const statusElement = screen.getByText("Offline");
    expect(statusElement).toBeInTheDocument();
  });

  it("renders the status as 'Online'", () => {
    render(<Status status="Online" />);
    const statusElement = screen.getByText("Online");
    expect(statusElement).toBeInTheDocument();
  });

  it("renders the status as 'Offline'", () => {
    render(<Status status="Offline" />);
    const statusElement = screen.getByText("Offline");
    expect(statusElement).toBeInTheDocument();
  });

  it("renders the status with the 'offline' class when status is 'Offline'", () => {
    render(<Status status="Offline" />);
    const statusElement = screen.getByText("Offline");
    expect(statusElement).toHaveClass("offline");
  });

  it("renders the status with the 'online' class when status is 'Online'", () => {
    render(<Status status="Online" />);
    const statusElement = screen.getByText("Online");
    expect(statusElement).toHaveClass("online");
  });
});
