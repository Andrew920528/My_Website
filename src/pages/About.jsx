import React from "react";
import Chip from "../components/Chip";
import Frame from "../components/Frame";
import Header from "../components/Header";
import gtLogo from "../images/gt_logo.png";

const About = () => {
  const GoalsContent = () => (
    <div className="goals">
      <p>
        I am an aspiring full-stack developer with the goal to make a real world
        impact through developing software. I adopted the passion and skill for
        software development, such as <strong>React</strong>
        and <strong>Flask</strong>, through my past internships working on
        computer vision and IOT technology.
      </p>
    </div>
  );

  const EducationContent = () => {
    return (
      <div className="education">
        <div className="image-wrapper">
          <img src={gtLogo} alt="gt-logo" />
        </div>
        <div className="info-block-1">
          <p className="time">2021 Aug - 2025 May</p>
          <h4>Georgia Institute of Technology</h4>
        </div>
        <div className="info-block-2">
          <p className="degree">
            <i>Bachelor of Science</i>
          </p>
          <p className="major">
            Major: <strong>Computer Science</strong>{" "}
            <i className="detail">(Intelligence/ Media)</i>
          </p>
          <p className="minor">
            Minor: <strong>Industrial Design</strong>
          </p>
        </div>
      </div>
    );
  };
  return (
    <div className="about">
      <Header title={"About Me"}></Header>
      <Frame>
        <AboutSectionBlock title={"Goals"}>
          <GoalsContent />
        </AboutSectionBlock>
      </Frame>
      <Frame>
        <AboutSectionBlock title={"Education"}>
          <EducationContent />
        </AboutSectionBlock>
      </Frame>
    </div>
  );
};

const AboutSectionBlock = ({title, children}) => {
  return (
    <div className="about-section-block">
      <div className="title-block">
        <h3>{title}</h3>
        <div className="line" />
      </div>
      {children}
    </div>
  );
};

export default About;
