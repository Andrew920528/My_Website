import React from "react";
import Chip from "../components/Chip";
import Frame from "../components/Frame";
import Header from "../components/Header";
import RectButton from "../components/RectButton";
const About = () => {
  return (
    <div className="about">
      <Header title={"About Me"}></Header>
      <Chip text={"Hello"}></Chip>
      <Frame>
        <div>Frame</div>
      </Frame>
      <Frame type={"info"}>
        <div>Info</div>
      </Frame>
      <RectButton
        text={"Button"}
        onClick={() => {}}
        align={"start"}
      ></RectButton>
    </div>
  );
};

export default About;
