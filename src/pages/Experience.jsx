import React from "react";
import Header from "../components/Header";
import RectButton from "../components/RectButton";
import InfoCard from "../components/InfoCard";
const Experience = () => {
  return (
    <div className="experience">
      <Header title={"Experience"} />
      <div className="subtitle-block">
        <h3>
          They taught me to never stop learning, and to always have a passion
          for what I do.
        </h3>
        <RectButton text={"View Resume"} onClick={() => {}} align={"center"} />
      </div>
      <div className="experience-cards">
        <InfoCard />
      </div>
    </div>
  );
};

export default Experience;
