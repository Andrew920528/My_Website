import React from "react";
import {Box, Card, Typography} from "@mui/material";
import Chip from "../components/Chip";
import Frame from "../components/Frame";
import Header from "../components/Header";
import RectButton from "../components/RectButton";
const About = () => {
  return (
    <div className="about">
      <Header title={"About"}></Header>
      <Chip text={"Hello"}></Chip>
      <Frame>
        <div>Frame</div>
      </Frame>
      <RectButton text={"Button"} onClick={() => {}}></RectButton>
    </div>
  );
};

export default About;
