import React, { useState } from "react";

export default function PostForm({ handleSubmit }) {
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(message);
  };

  return (
    <form className="PostForm" role="form" onSubmit={onSubmit}>
      <div className="new-post-field">
        <textarea
          id="new-post"
          name="newPost"
          rows="4"
          placeholder="Type message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" className="add-post-btn">
        Add Post
      </button>
    </form>
  );
}
