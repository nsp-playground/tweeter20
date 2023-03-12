import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShare } from "react-icons/fi";

export default function Post({ content, timeline }) {
  return (
    <div className="Post">
      <p className="post-text">{content}</p>
      <div className="flex justify-space-between gap-16">
        <div className="post-actions flex gap-20">
          <div className="icon-block">
            <AiOutlineHeart size="36px" />
            <span className="icon-count flex justify-content-center align-items-center">
              100
            </span>
          </div>
          <div className="icon-block">
            <FiShare size="36px" />
          </div>
        </div>
        <span className="post-time">{timeline}</span>
      </div>
    </div>
  );
}
