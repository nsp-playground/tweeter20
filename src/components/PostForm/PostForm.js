import React from "react";

export default function PostForm() {
  return (
    <form className="PostForm">
      <div className="new-post-field">
        <textarea
          id="new-post"
          name="newPost"
          rows="4"
          placeholder="Type message here..."
        ></textarea>
      </div>
      <button type="submit" className="add-post-btn">
        Add Post
      </button>
    </form>
  );
}
