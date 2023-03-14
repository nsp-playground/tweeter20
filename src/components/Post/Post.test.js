import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Post from "./Post";

describe("Post component", () => {
  const mockContent = "This is a post";
  const mockTimeline = "1 hour ago";

  it("renders the post content", () => {
    render(<Post content={mockContent} timeline={mockTimeline} />);
    const postText = screen.getByText(mockContent);
    expect(postText).toBeInTheDocument();
  });

  it("renders the post timeline", () => {
    render(<Post content={mockContent} timeline={mockTimeline} />);
    const postTime = screen.getByText(mockTimeline);
    expect(postTime).toBeInTheDocument();
  });

  it("renders the post actions icons", () => {
    render(<Post content={mockContent} timeline={mockTimeline} />);
    const heartIcon = screen.getByTestId("heart-icon");
    const shareIcon = screen.getByTestId("share-icon");
    expect(heartIcon).toBeInTheDocument();
    expect(shareIcon).toBeInTheDocument();
  });

  it("renders the post actions icons with the correct size", () => {
    render(<Post content={mockContent} timeline={mockTimeline} />);
    const heartIcon = screen.getByTestId("heart-icon");
    const shareIcon = screen.getByTestId("share-icon");
    expect(heartIcon).toHaveAttribute("width", "36px");
    expect(shareIcon).toHaveAttribute("width", "36px");
  });

  it("renders the post actions icons with the correct count", () => {
    render(<Post content={mockContent} timeline={mockTimeline} />);
    const iconCount = screen.getByText("100");
    expect(iconCount).toBeInTheDocument();
  });
});
