/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Post from "./Post";

export default {
  title: "Components/Post",
  component: Post,
};

export const Default = () => (
  <Post
    content="Working on my first project with Figma, really excited, wish me luck!"
    time="Feb 2, 2023 @ 4:45pm"
  />
);
