import React from "react";
import Tweet from "../tweet";
import WhatsHappening from "./whats-happening";
import TuitsList from "../tuits/tuits-list";

const HomeComponent = () => {
  return (
    <>
      <h4>Home</h4>
      <WhatsHappening />
      <TuitsList />
    </>
  );
};

export default HomeComponent;
