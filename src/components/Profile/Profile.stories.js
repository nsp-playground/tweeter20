/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Profile from "./Profile";

export default {
  title: "Components/Profile",
  component: Profile,
};

export const Online = () => <Profile username="shakib" status="Online" />;

export const Offline = () => <Profile username="shakib" status="Offline" />;

// OEoIHlrBgyF0nd0jFMxLE4DsYjbef111fCtKfBqOLWaVY110;
