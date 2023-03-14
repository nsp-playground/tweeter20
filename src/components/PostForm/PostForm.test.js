import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import PostForm from "./PostForm";

describe("PostForm component", () => {
  it("renders the form", () => {
    render(<PostForm />);
    const form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
  });

  it("renders the textarea with the correct placeholder", () => {
    render(<PostForm />);
    const textarea = screen.getByPlaceholderText("Type message here...");
    expect(textarea).toBeInTheDocument();
  });

  it("calls the onSubmit handler when the form is submitted", () => {
    const handleSubmit = jest.fn();
    render(<PostForm handleSubmit={handleSubmit} />);
    const form = screen.getByRole("form");
    fireEvent.submit(form);
    expect(handleSubmit).toHaveBeenCalled();
  });

  it("calls the onSubmit handler with the new post content", () => {
    const handleSubmit = jest.fn();
    render(<PostForm handleSubmit={handleSubmit} />);
    const textarea = screen.getByPlaceholderText("Type message here...");
    fireEvent.change(textarea, { target: { value: "This is a new post" } });
    const form = screen.getByRole("form");
    fireEvent.submit(form);
    expect(handleSubmit).toHaveBeenCalledWith("This is a new post");
  });
});
