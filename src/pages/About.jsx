import React, {useState} from "react";
import Chip from "../components/Chip";
import Frame from "../components/Frame";
import Header from "../components/Header";
import gtLogo from "../images/gt_logo.png";
import Collapse from "@mui/material/Collapse";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
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
    const [courseExpand, setCourseExpand] = useState(false);
    const courses = [
      "OOP",
      "Machine Learning",
      "Algorithm & Design",
      "Data Structures",
      "Computer Graphics",
      "User Centered Design",
      "Course1",
      "Course2",
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
    const skills = [
      "React",
      "JavaScript",
      "CSS",
      "SASS",
      "HTML",
      "Java",
      "Python",
      "C",
      "SQL",
      "Git",
    ];
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
      <Frame>
        <AboutSectionBlock title={"Skill"}>
          <SkillContent />
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
