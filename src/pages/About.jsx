import React, {forwardRef, useState} from "react";
import Chip from "../components/Chip";
import Frame from "../components/Frame";
import Header from "../components/Header";
import gtLogo from "../images/gt_logo.png";
import Collapse from "@mui/material/Collapse";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import {Skill} from "../global/constants";
const About = forwardRef(({hide}, ref) => {
  const GoalsContent = () => (
    <div className="goals">
      <p>
        I'm an aspiring full-stack developer with a goal to create software that
        makes a real-world impact. My passion for development grew through
        internships focused on computer vision and IoT technology, where I
        gained experience with tools like <srong>React</srong> and{" "}
        <strong>Flask</strong>. Outside of tech, I enjoy drawing and playing
        basketball, which help me stay creative and active. I was also the
        president of the Taiwanese Student Association at Georgia Tech, where I
        led initiatives to connect students and foster a supportive community.
        I’m excited to continue building my skills and contribute to meaningful
        software development.
      </p>
    </div>
  );

  const EducationContent = () => {
    const [courseExpand, setCourseExpand] = useState(false);
    const courses = [
      "OOP",
      "Machine Learning",
      "Algorithm & Design",
      "Data Structures",
      "Computer Graphics",
      "User Centered Design",
      "Automata and Complexity",
    ];
    const toggleCourse = () => {
      setCourseExpand((prev) => !prev);
    };
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
        <div className="courses-block">
          <p className="courses"> Courses </p>
          <ExpandableChipContent
            expand={courseExpand}
            toggle={toggleCourse}
            content={courses}
          />
        </div>
      </div>
    );
  };

  const SkillContent = () => {
    const [skillExpand, setSkillExpand] = useState(false);
    const skills = Object.values(Skill);
    const toggleSkill = () => {
      setSkillExpand((prev) => !prev);
    };
    return (
      <div className="skill">
        <ExpandableChipContent
          expand={skillExpand}
          toggle={toggleSkill}
          content={skills}
        />
      </div>
    );
  };

  return (
    <div
      className={`about ${hide ? "--pc-display-none" : "--pc-visible"}`}
      ref={ref}
    >
      <Header title={"About Me"} className="about-header"></Header>
      <div className="about-sections">
        <div className="about-section-wrap-goal">
          <Frame>
            <AboutSectionBlock title={"Goals"}>
              <GoalsContent />
            </AboutSectionBlock>
          </Frame>
        </div>
        <div className="about-skill-edu-wrapper">
          <div className="about-section-wrap">
            <Frame>
              <AboutSectionBlock title={"Education"}>
                <EducationContent />
              </AboutSectionBlock>
            </Frame>
          </div>
          <div className="about-section-wrap">
            <Frame>
              <AboutSectionBlock title={"Skill"}>
                <SkillContent />
              </AboutSectionBlock>
            </Frame>
          </div>
        </div>
      </div>
    </div>
  );
});

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

const ExpandableChipContent = ({expand, toggle, content}) => {
  return (
    <div className="expandable-chips-wrapper">
      <Collapse
        in={expand}
        collapsedSize={100}
        className={`${!expand && "collapsed"}`}
      >
        <div className="expandable-chips">
          {content.map((val, ind) => {
            return <Chip text={val} key={"chip-" + val} />;
          })}
        </div>
      </Collapse>
      <div
        className="expand-btn"
        onClick={() => {
          toggle();
        }}
      >
        <p>{expand ? "Collapse" : "Expand"}</p>
        <KeyboardDoubleArrowDownIcon
          className={`down-icon ${expand && "rotate"}`}
        />
      </div>
    </div>
  );
};

export default About;
